// JavaScript for hamburger menu toggle
document.getElementById('menu-icon').addEventListener('click', function () {
    const navItems = document.getElementById('nav-items');
    const menuicon =document.getElementById('menu-icon');
    navItems.classList.toggle('show');
    menuicon.classList.toggle("active");    
});
// Close menu when a link is clicked
document.querySelectorAll('.nav-items a').forEach(link => {
    link.addEventListener('click', () => {
        const navItems = document.getElementById('nav-items');
        const menuIcon = document.getElementById('menu-icon');
        navItems.classList.remove('show');
        menuIcon.classList.remove('active');
    });
});

//Script to download resume

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Asserts/documents/Dinesh_Resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
}

// script to scroll to contact section
function scrollToContact() {
    document.getElementById('Contact').scrollIntoView({
        behavior: 'smooth'  // Enables smooth scrolling
    });
}

// script to check the visibility of skill section
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    function checkVisibility() {
        progressBars.forEach(function (bar) {
            const barTop = bar.getBoundingClientRect().top;
            const screenBottom = window.innerHeight;

            if (barTop < screenBottom) {
                const skillLevel = bar.getAttribute("data-skill");
                bar.style.width = skillLevel + "%";
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("load", checkVisibility);
});

// Lottie animation setup
var hackathonAnimation = lottie.loadAnimation({
    container: document.getElementById('lottie-hackathon'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/247099a0-13c1-400f-91ec-185ff22033a4/ve8tJMYuin.json' // Replace with desired Lottie file
});

