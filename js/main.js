import { initNavigation } from "./navigation.js";
import { renderApp } from "./renderer.js";
import { initializeCounters } from "./counter.js";
import { initScrollSpy } from "./scrollSpy.js";
import { getDashboardData } from "./github.js";

document.addEventListener("DOMContentLoaded", async () => {

    initNavigation();

    try {

        const githubData = await getDashboardData();

        console.log(githubData);
        console.log("developers:", githubData.developers);
        console.log("stats:", githubData.stats);
        console.log("branches:", githubData.branches);


        renderApp(githubData);


    } catch (error) {

        console.error("Failed to load GitHub data:", error);

    }

    initializeCounters();
    initScrollSpy();

    

});