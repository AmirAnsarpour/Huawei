let carouselSlide = document.querySelector(".carousel-slide");
let carouselImages = document.querySelectorAll(".carousel-slide img");
let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");
let counter = 1;
let size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

window.addEventListener("resize", function () {
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
})

nextBtn.addEventListener("click", function () {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});
prevBtn.addEventListener("click", function () {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});
carouselSlide.addEventListener("transitionend", function () {
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
})