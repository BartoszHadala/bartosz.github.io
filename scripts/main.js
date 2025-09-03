// This file contains the JavaScript code for the portfolio website.
// You can add functionality such as interactive elements, animations, or form handling here.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example: Display a welcome message in the console
    console.log("Welcome to my personal portfolio!");
});