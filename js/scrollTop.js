const navbar = document.querySelector(".navbar")

let lastScrollPos = 0;

window.addEventListener("scroll", e => {

    if (window.innerWidth < 767) {

        let scr = window.pageYOffset;
        if (scr > lastScrollPos && scr > 100) {
            navbar.style.top = "-100%"
        } else if (scr < lastScrollPos) {
            navbar.style.top = "0"
            navbar.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 2px 4px 0px";
        }

        if (scr > 110) {
            navbar.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 2px 4px 0px";
        } else {
            navbar.style.boxShadow = "none";
        }
        lastScrollPos = scr;

    }
})