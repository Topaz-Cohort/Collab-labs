// =========================================
// github.js
// Handles all communication with GitHub
// =========================================

const BASE_URL = "https://api.github.com";

/* =========================================
   Generic GitHub Request
========================================= */

async function githubRequest(endpoint, token) {

    const response = await fetch(`${BASE_URL}${endpoint}`, {

        headers: {

            Authorization: `Bearer ${token}`,

            Accept: "application/vnd.github+json",

            "User-Agent": "CollabLab"

        }

    });

    if (!response.ok) {

        throw new Error(`GitHub Error ${response.status}`);

    }

    return response.json();

}

/* =========================================
   Fetch Dashboard Data
========================================= */

export async function getDashboardData(token, env) {

    const repositoryPath = `/repos/${env.OWNER}/${env.REPO}`;
    
    const [

        repository,
        branches,
        contributors,
        commits,
        pullRequests,
        issues

    ] = await Promise.all([

        githubRequest(repositoryPath, token),

        githubRequest(`${repositoryPath}/branches`, token),

        githubRequest(`${repositoryPath}/contributors`, token),

        githubRequest(`${repositoryPath}/commits?per_page=100`, token),

        githubRequest(`${repositoryPath}/pulls?state=all&per_page=100`, token),

        githubRequest(
            `${repositoryPath}/issues?state=open&per_page=100`,
            token
        )

    ]);

    const realIssues = issues.filter(issue => !issue.pull_request);

    // Fetch public profile of every contributor
    const developers = await Promise.all(

        contributors.map(async contributor => {

            const profile = await githubRequest(

                `/users/${contributor.login}`,

                token

            );

            return {

                login: contributor.login,

                name: profile.name || contributor.login,

                avatar: contributor.avatar_url,

                profile: contributor.html_url,

                commits: contributor.contributions,

                bio: profile.bio,

                location: profile.location,

                company: profile.company

            };

        })

    );

    return {

        repository,

        branches,

        contributors,

        commits,

        pullRequests,
        
        issues: realIssues,

        developers

    };

}