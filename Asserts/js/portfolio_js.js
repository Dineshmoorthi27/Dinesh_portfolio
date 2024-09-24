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
