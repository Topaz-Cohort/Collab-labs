// =========================================
// renderer.js
// Responsible for rendering dynamic UI
// =========================================

import { appData } from "./data.js";

/* =========================================
   Repository Name
========================================= */

function renderRepositoryName(githubData) {

    // console.log("renderRepositoryName:", githubData);

    const element = document.querySelector("[data-repository-name]");

    if (!element) return;

    element.textContent = githubData.repository.name;

}


/* =========================================
   Branch List
========================================= */

function renderBranches(githubData) {

    const container = document.querySelector("[data-branch-list]");

    if (!container) return;

    container.innerHTML = githubData.branches.map(branch => `

        <div class="branch">

            <i data-lucide="git-branch"></i>

            <span>${branch.name}</span>

        </div>

    `).join("");

}


/* =========================================
   Hero Activity
========================================= */

function renderLatestActivity(githubData) {

    const container = document.querySelector("[data-latest-activity]");

    if (!container) return;

    container.innerHTML = githubData.heroActivity.map(activity => `

        <div class="activity">

            <strong>${activity.author}</strong>

            ${activity.action}

            <code>${activity.target}</code>

        </div>

    `).join("");

}


/* =========================================
   Statistics
========================================= */

function renderCounters(githubData) {

    document
        .querySelectorAll("[data-counter]")
        .forEach(counter => {

            const key = counter.dataset.counter;

            counter.textContent =
                githubData.stats[key] ?? 0;

        });

}

/* =========================================
   Repository Summary
========================================= */

function renderSummary(githubData) {

    document
        .querySelectorAll("[data-summary]")
        .forEach(item => {

            const key = item.dataset.summary;

            item.textContent =
                githubData.summary[key] ?? 0;

        });

}


/* =========================================
   Project Board
========================================= */

function renderProjectBoard(githubData) {

    const container = document.querySelector("[data-project-board]");

    if (!container) return;

    container.innerHTML = githubData.projectBoard.map(column => `

        <div class="board-column">

            <div class="column-header">

                <i data-lucide="${column.icon}"></i>

                <h4>${column.title}</h4>

            </div>

            ${column.cards.map(card => `

                <div class="board-card ${card.status}">

                    ${card.title}

                </div>

            `).join("")}

        </div>

    `).join("");

}


/* =========================================
   Dashboard Activity
========================================= */

function renderDashboardActivity(githubData) {

    const container = document.querySelector("[data-dashboard-activity]");

    if (!container) return;

    container.innerHTML = githubData.dashboardActivity.map(item => `

        <div class="activity-item">

            <div class="activity-icon">

                <i data-lucide="${item.icon}"></i>

            </div>

            <div>

                <strong>${item.author}</strong>

                <p>${item.message}</p>

            </div>

        </div>

    `).join("");

}


/* =========================================
   Developers
========================================= */

function renderDevelopers(githubData) {

    const container = document.querySelector("[data-developers]");

    if (!container) return;

    const developers = githubData.developers;

    container.innerHTML = developers.map(dev => `

        <article class="developer-card">

            <img
                class="developer-avatar"
                src="${dev.avatar}"
                alt="${dev.login}"
            />

            <h3>${dev.name.charAt(0).toUpperCase() + dev.name.slice(1)}</h3>

            <p class="developer-role">
                ${dev.role}
            </p>

            <ul class="developer-info">

                <li>
                    <strong>GitHub:</strong>
                    ${dev.login}
                </li>

                <li>
                    <strong>Learning Lab:</strong>
                    ${dev.lab}
                </li>

                <li>
                    <strong>Branch:</strong>
                    ${dev.branch}
                </li>

                <li>
                    <strong>Status:</strong>
                    ${dev.status}
                </li>

                <li>
                    <strong>Commits:</strong>
                    ${dev.commits}
                </li>

            </ul>

            <a
                href="${dev.profile}"
                target="_blank"
                class="btn btn-outline"
            >
                View GitHub
            </a>

        </article>

    `).join("");

}


/* =========================================
   Render Everything
========================================= */

export function renderApp(githubData) {

    renderRepositoryName(githubData);

    renderBranches(githubData);

    renderLatestActivity(githubData);

    renderCounters(githubData);

    renderSummary(githubData);

    renderProjectBoard(githubData);

    renderDashboardActivity(githubData);

    renderDevelopers(githubData);

    lucide.createIcons();

}