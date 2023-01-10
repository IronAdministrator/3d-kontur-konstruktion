let body = document.querySelector("body");
let icon = document.querySelector(".theme-icon");
let header = document.querySelector(".header-main")
let mainSection = document.querySelector("main")


icon.onclick = function () {
    body.classList.toggle("dark-theme");
    icon.classList.toggle("bi-moon-stars");
    icon.classList.toggle("bi-sun");
};

// mainSection.addEventListener("scroll",  () => {
//     console.log(mainSection.scrollY)
//     if (mainSection.scrollY > 0) {
//         document.querySelector("header").classList.add("nav-scrolled");
//     } else {
//         document.querySelector("header").classList.remove("nav-scrolled");
//     }
// });

// mainSection.onscroll = function () {
//     if (mainSection.scrollY > 0) {
//         header.classList.toggle("on-scroll")
//     }
// }