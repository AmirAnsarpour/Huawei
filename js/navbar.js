const corporateBlackNavbar = document.querySelector("#one-black-navbar");
const onedownMarkBlackNavbar = document.querySelector("#one-black-navbar i:last-child")

const worldwideBlackNavbar = document.querySelector("#two-black-navbar");
const twodownMarkBlackNavbar = document.querySelector("#two-black-navbar i:last-child")

const loginBlackNavbar = document.querySelector("#three-black-navbar");

corporateBlackNavbar.addEventListener("click", function () {
    corporateBlackNavbar.classList.toggle("black-navbar-active");
    worldwideBlackNavbar.classList.remove("black-navbar-active");
    if (onedownMarkBlackNavbar.classList.contains("bi-chevron-down")) {
        onedownMarkBlackNavbar.classList.add("bi-chevron-up");
        onedownMarkBlackNavbar.classList.remove("bi-chevron-down");
    }
    else {
        onedownMarkBlackNavbar.classList.add("bi-chevron-down");
        onedownMarkBlackNavbar.classList.remove("bi-chevron-up");
    }
})

worldwideBlackNavbar.addEventListener("click", function () {
    worldwideBlackNavbar.classList.toggle("black-navbar-active");
    corporateBlackNavbar.classList.remove("black-navbar-active");
    if (twodownMarkBlackNavbar.classList.contains("bi-chevron-down")) {
        twodownMarkBlackNavbar.classList.add("bi-chevron-up");
        twodownMarkBlackNavbar.classList.remove("bi-chevron-down");
    }
    else {
        twodownMarkBlackNavbar.classList.add("bi-chevron-down");
        twodownMarkBlackNavbar.classList.remove("bi-chevron-up");
    }
})