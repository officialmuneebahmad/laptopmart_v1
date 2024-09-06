const burger = document.querySelector('.burger');
const navItems = document.querySelector('.nav-items');
const categoryToggle = document.getElementById('category-toggle');
const categoryMenu = document.getElementById('category-menu');

// Toggle mobile menu
burger.addEventListener('click', () => {
    navItems.classList.toggle('active');
});

// Toggle category dropdown menu
categoryToggle.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    categoryMenu.classList.toggle('active');
});

// Close the category menu when clicking outside of it
document.addEventListener('click', (e) => {
    // Check if the click is outside the category menu and toggle button
    if (!categoryMenu.contains(e.target) && !categoryToggle.contains(e.target)) {
        categoryMenu.classList.remove('active');
    }
});

// Prevent clicks inside the category menu from closing it
categoryMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});



