document.addEventListener("DOMContentLoaded", function () {

    const moreDetails = document.querySelectorAll(".more-details");

    moreDetails.forEach(function (details) {

        const summary = details.querySelector("summary");

        if (!summary) {
            return;
        }

        details.addEventListener("toggle", function () {

            if (details.open) {
                summary.textContent = "Less";
            } else {
                summary.textContent = "More";
            }

        });

    });

});