import { getDashboardData } from "./github";
import { mapDashboardData } from "./mapper";

export default {

	async fetch(request, env) {

		try {

			const githubData =
				await getDashboardData(env.GITHUB_TOKEN, env);

			console.log(githubData);

			const dashboard =
				mapDashboardData(githubData);

			return Response.json(dashboard, {

				headers: {

					"Access-Control-Allow-Origin": "*"

				}

			});

		}

		catch (error) {

			return Response.json({

				error: error.message

			}, {

				status: 500

			});

		}

	}

}