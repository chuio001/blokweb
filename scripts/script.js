// JavaScript Document

function showMenuItems() {
    const toggleItem = document.getElementById('menu-btn');
    const hamburgerItems = document.getElementById('hamburger-items');
    toggleItem.addEventListener('click', function () {
        this.classList.toggle('opened');
        this.setAttribute('aria-expanded', this.classList.contains('opened'))
        if (hamburgerItems.classList.contains('nav-show')) {
            hamburgerItems.classList.remove('nav-show');
        } else {
            hamburgerItems.classList.add('nav-show');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showMenuItems();
});
