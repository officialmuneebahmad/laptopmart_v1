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


// IMG SLIDER
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slideImages.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Auto-slide every 5 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
