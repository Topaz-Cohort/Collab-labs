import { config } from "./config.js";

export async function getDashboardData() {

    const response = await fetch(config.worker.baseUrl);

    if (!response.ok) {

        throw new Error("Failed to load dashboard data");

    }

    return response.json();

}