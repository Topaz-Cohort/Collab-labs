const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {

    item.addEventListener("toggle", () => {

        if (!item.open) return;

        faqs.forEach(other => {

            if (other !== item) {

                other.open = false;

            }

        });

    });

});