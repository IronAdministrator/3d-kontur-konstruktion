const body = document.querySelector("body");
const icon = document.querySelector(".theme-icon");

icon.onclick = function () {
    body.classList.toggle("dark-theme");
    icon.classList.toggle("bi-moon-stars");
    icon.classList.toggle("bi-sun");
};