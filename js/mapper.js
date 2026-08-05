import { appData } from "./data.js";

export function mapDevelopers(githubData) {

    return githubData.developers.map(user => {

        const local = appData.developers.find(dev =>

            dev.github.toLowerCase() === user.login.toLowerCase()

        );

        return {

            avatar: user.avatar,

            username: user.login,

            name: user.name,

            profile: user.profile,

            commits: user.commits,

            role: local?.role ?? "Contributor",

            lab: local?.lab ?? "Community Contribution",

            branch: local?.branch ?? "Active Branch",

            status: local?.status ?? "Contributing"

        };

    });

}