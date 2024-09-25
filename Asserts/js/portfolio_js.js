// JavaScript for hamburger menu toggle
document.getElementById('menu-icon').addEventListener('click', function () {
    const navItems = document.getElementById('nav-items');
    navItems.classList.toggle('show');
});
//Script to download resume

function downloadResume() {
    const link = document.createElement('a');
    link.href = '../Asserts/documents/Dinesh_Resume.pdf';
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

