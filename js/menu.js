const burger = document.querySelector(".burger");
const nav = document.querySelector(".mobile-nav");
const close = document.querySelector(".close");
const links = document.querySelectorAll(".mobile-nav-link");


burger.addEventListener("click", e => {
    nav.classList.toggle("show");
    close.classList.add("show-block");
    burger.classList.remove("show-block");

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", e => {
            nav.classList.remove("show");
            close.classList.remove("show-block");
            burger.classList.add("show-block");
        });
    }
})

close.addEventListener("click", e => {
    nav.classList.remove("show");
    close.classList.remove("show-block");
    burger.classList.add("show-block");
})