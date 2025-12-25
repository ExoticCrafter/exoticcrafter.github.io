// Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar change on scroll
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15, 23, 42, 1)"; // Solid Deep Slate
        navbar.style.padding = "15px 5%";
    } else {
        navbar.style.background = "rgba(15, 23, 42, 0.9)"; // Transparent Deep Slate
        navbar.style.padding = "20px 5%";
    }
});
