// JavaScript Document
function showMenuItems() {
    const toggleItem = document.getElementById('menu-btn');
    const hamburgerItems = document.getElementById('hamburger-items');
    toggleItem.addEventListener('click', function () {
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
