/**
 * ============================
 * Navigation Module
 * ============================
 */

export function initNavigation() {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".nav-links a");

    //----------------------------------------------------
    // Sticky Header
    //----------------------------------------------------

    function handleScroll() {
        if (window.scrollY > 20) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    }

    window.addEventListener("scroll", handleScroll);

    //----------------------------------------------------
    // Smooth Scrolling
    //----------------------------------------------------

    navLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (!target) return;

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    //----------------------------------------------------
    // Active Navigation Link
    //----------------------------------------------------

    const sections = document.querySelectorAll("section[id]");

    function highlightNav() {

        const scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
            ) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") === `#${sectionId}`
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    }

    window.addEventListener("scroll", highlightNav);

    //----------------------------------------------------
    // Run once on page load
    //----------------------------------------------------

    handleScroll();
    highlightNav();
}