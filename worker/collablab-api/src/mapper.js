// =========================================
// mapper.js
// Converts GitHub API responses into
// the format expected by the frontend
// =========================================

import { LABS } from "./labs.js";

export function mapDashboardData(data) {

    return {

        repository: {
            name: data.repository.name
        },

        branches: data.branches.map(branch => ({
            name: branch.name
        })),



        stats: {

            contributors: data.developers.length,

            labs: data.developers.length,

            pullRequests: data.pullRequests.length,

            commits: data.commits.length

        },



        summary: {

            branches: data.branches.length,

            contributors: data.contributors.length,

            pullRequests: data.pullRequests.length,

            merged: data.pullRequests.filter(
                pr => pr.merged_at
            ).length

        },



        heroActivity: data.commits

            .slice(0, 3)

            .map(commit => ({

                author:

                    commit.commit.author?.name ||

                    commit.author?.login ||

                    "Unknown",

                action: "pushed",

                target: commit.commit.message

            })),



        dashboardActivity: data.commits

            .slice(0, 5)

            .map(commit => ({

                icon: "git-commit-horizontal",

                author:

                    commit.commit.author?.name ||

                    commit.author?.login ||

                    "Unknown",

                message: commit.commit.message

            })),



        developers: data.developers.map(user => {

            const latestCommit = data.commits.find(commit =>

                commit.author?.login === user.login

            );

            const latestPR = data.pullRequests.find(pr =>

                pr.user.login === user.login

            );

            const branch =
                latestPR?.head?.ref ??
                "main";

            const lab = LABS[branch] ?? {

                name: "Community Contribution",

                role: "Contributor"

            };

            return {

                login: user.login,

                name: user.name,

                avatar: user.avatar,

                profile: user.profile,

                commits: user.commits,

                branch,

                lab: lab.name,

                role: lab.role,

                status: latestPR
                    ? "Pull Request Open"
                    : "Contributing"

            };

        }),

        issues: data.issues,


        projectBoard: [

            {
                title: "To Do",
                icon: "clipboard-list",

                cards: data.issues.map(issue => ({

                    title: issue.title,
                    status: ""

                }))

            },

            {
                title: "In Progress",
                icon: "hammer",

                cards: data.branches

                    .filter(branch => branch.name !== "main")

                    .map(branch => ({

                        title: branch.name,
                        status: "active"

                    }))

            },

            {
                title: "In Review",
                icon: "git-pull-request",

                cards: data.pullRequests.map(pr => ({

                    title: `PR #${pr.number}: ${pr.title}`,
                    status: "review"

                }))

            },

            {
                title: "Completed",
                icon: "badge-check",
                cards: data.pullRequests
                    .filter(pr => pr.merged_at)
                    .slice(0, 5)
                    .map(pr => ({

                        title: pr.title,

                        subtitle: `Merged by ${pr.user.login}`,

                        status: "complete"

                    }))
            }

        ]

    };

}