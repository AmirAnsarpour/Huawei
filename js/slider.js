$(document).ready(function () {
    let counter = 1;
    let size = $(".carousel-slide img")[0].clientWidth;
    let carouselSlide = $(".carousel-slide");
    let carouselImages = $(".carousel-slide img");
    let prevBtn = $("#prevBtn");
    let nextBtn = $("#nextBtn");

    carouselSlide.css("transform", "translateX(" + (-size * counter) + "px)");

    $(nextBtn).click(function () {
        if (counter >= carouselImages.length - 1) return;
        carouselSlide.css("transition", "transform 0.6s ease-in-out")
        counter++;
        carouselSlide.css("transform", "translateX(" + (-size * counter) + "px)");
    });

    $(prevBtn).click(function () {
        if (counter <= 0) return;
        carouselSlide.css("transition", "transform 0.6s ease-in-out")
        counter--;
        carouselSlide.css("transform", "translateX(" + (-size * counter) + "px)");
    });
    carouselSlide.addEventListener("transitionend", function () {
        if (carouselImages[counter].id === "lastClone") {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 1;
            carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
        }
        if (carouselImages[counter].id === "firstClone") {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
        }
    })
})