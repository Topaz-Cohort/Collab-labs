export function initializeCounters() {

    const statsSection = document.querySelector("#stats");

    if (!statsSection) return;

    const counters = document.querySelectorAll("[data-counter]");

    const observer = new IntersectionObserver(

        (entries) => {

            if (!entries[0].isIntersecting) return;

            counters.forEach(counter => {

                const target = Number(counter.textContent);

                animateCounter(counter, target);

            });

            observer.disconnect();

        },

        {
            threshold: 0.35
        }

    );

    observer.observe(statsSection);

}



function animateCounter(element, target) {

    let start = 0;

    const duration = 1500;

    const startTime = performance.now();

    function update(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const value = Math.floor(progress * target);

        element.textContent = value.toLocaleString();

        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            element.textContent = target.toLocaleString();

        }

    }

    requestAnimationFrame(update);

}