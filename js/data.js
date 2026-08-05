export const appData = {

    repository: {

        name: "collab-lab",

        branches: [

            "main",

            "feature/task-manager",

            "feature/calculator",

            "feature/quiz"

        ]

    },


    heroActivity: [

        {

            author: "Tobi",

            action: "pushed",

            target: "feat: create hero section"

        },

        {

            author: "David",

            action: "opened Pull Request",

            target: "#18"

        },

        {

            author: "Sarah",

            action: "updated",

            target: "Quiz UI"

        }

    ],



    projectBoard: [

        {

            title: "To Do",

            icon: "clipboard-list",

            cards: [

                {

                    title: "Create Footer",

                    status: ""

                },

                {

                    title: "Responsive Testing",

                    status: ""

                },

                {

                    title: "Accessibility Check",

                    status: ""

                }

            ]

        },



        {

            title: "In Progress",

            icon: "hammer",

            cards: [

                {

                    title: "Task Manager UI",

                    status: "active"

                },

                {

                    title: "Calculator Logic",

                    status: "active"

                }

            ]

        },



        {

            title: "In Review",

            icon: "git-pull-request",

            cards: [

                {

                    title: "PR #18",

                    status: "review"

                },

                {

                    title: "PR #20",

                    status: "review"

                }

            ]

        },



        {

            title: "Completed",

            icon: "badge-check",

            cards: [

                {

                    title: "Hero Section",

                    status: "complete"

                },

                {

                    title: "Statistics",

                    status: "complete"

                },

                {

                    title: "Workflow",

                    status: "complete"

                }

            ]

        }

    ],



    dashboardActivity: [

        {

            icon: "git-commit-horizontal",

            author: "Developer 01",

            message: "feat: create task form"

        },

        {

            icon: "git-pull-request-create",

            author: "Developer 02",

            message: "Opened Pull Request #18"

        },

        {

            icon: "message-circle-more",

            author: "Maintainer",

            message: "Requested code changes"

        },

        {

            icon: "git-merge",

            author: "Maintainer",

            message: "Merged PR #17 into main"

        },

        {

            icon: "rocket",

            author: "Developer 03",

            message: "Started Quiz Application"

        }

    ],



    developers: [

        {
            github: "Daniel-T-Dada",
            role: "Maintainer",
            lab: "Repository Management",
            branch: "main",
            status: "Maintaining Repository"
        },

        {
            github: "smartek-nig",
            role: "Frontend Developer",
            lab: "Quiz Application",
            branch: "quiz",
            status: "Completed"
        },

        {
            github: "Nadhrah",
            role: "Frontend Developer",
            lab: "Calculator",
            branch: "feature/calculator",
            status: "In Progress"
        },

        {
            github: "Uche",
            role: "Frontend Developer",
            lab: "Task Manager",
            branch: "feature/task-manager",
            status: "In Review"
        },

    ]

};