document.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// let hiddenText = document.querySelector(".hidden-text");
// hiddenText.classList.add("show");
