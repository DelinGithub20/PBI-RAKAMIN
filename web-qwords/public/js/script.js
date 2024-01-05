document.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Tampilkan modal saat link ditekan
    document.getElementById("loginLink").click();
});

document.addEventListener("DOMContentLoaded", function () {
    var myModal = new bootstrap.Modal(document.getElementById("loginModal"));

    // Tampilkan modal saat tombol login ditekan
    document
        .getElementById("loginModal")
        .addEventListener("click", function () {
            myModal.show();
        });
});

$(document).ready(function () {
    $(".logo-slider").slick({
        autoplay: true,
        autoplaySpeed: 1500, // Ganti sesuai kebutuhan
        slidesToShow: 4, // Menampilkan 4 logo sekaligus, ganti sesuai kebutuhan
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Ganti sesuai kebutuhan pada breakpoint tertentu
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Ganti sesuai kebutuhan pada breakpoint tertentu
                },
            },
        ],
    });
});
