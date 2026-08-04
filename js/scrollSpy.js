// =========================================
// scrollSpy.js
// Highlights the current navigation link
// =========================================

export function initScrollSpy() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-link");

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const id = entry.target.id;

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${id}`) {

                        link.classList.add("active");

                    }

                });

            });

        },

        {

            rootMargin: "-40% 0px -45% 0px",

            threshold: 0

        }

    );

    sections.forEach(section => observer.observe(section));

}