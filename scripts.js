// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });

            // Zamknij menu po kliknięciu na link
            if (navList.classList.contains("active")) {
                navList.classList.remove("active");
            }
        });
    });

    mobileMenu.addEventListener("click", function() {
        navList.classList.toggle("active");
    });
});
