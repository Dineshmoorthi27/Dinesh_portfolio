// JavaScript for hamburger menu toggle
document.getElementById('menu-icon').addEventListener('click', function () {
    const navItems = document.getElementById('nav-items');
    navItems.classList.toggle('show');
});
