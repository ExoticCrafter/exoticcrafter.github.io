// Typing Animation for Roles
const texts = ["Data Engineering Student", "Student Leader", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause before next word
    } else {
        setTimeout(type, 100); // Typing speed
    }
}());

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
        navbar.style.background = "rgba(13, 13, 13, 1)";
        navbar.style.padding = "15px 5%";
    } else {
        navbar.style.background = "rgba(13, 13, 13, 0.95)";
        navbar.style.padding = "20px 5%";
    }
});
