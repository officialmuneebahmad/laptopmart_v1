// Function to load the navbar, footer, and other content
function loadContent() {
  // Fetch the navbar HTML and insert it
  fetch('../centralized-navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;

      // Initialize dropdown and burger menu after navbar is loaded
      initializeMenu();
    })
    .catch(error => console.error('Error loading navbar:', error));

  // Fetch the footer HTML and insert it
  fetch('../centralized-footer/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

  // Fetch the Search code
  fetch('../centralized-search/search.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('search').innerHTML = data;
    })
    .catch(error => console.error('Error loading Search Bar:', error));
}

// Function to initialize dropdown and burger menu functionality
function initializeMenu() {
  const burger = document.querySelector('.burger');
  const navItems = document.querySelector('.nav-items');
  const categoryToggle = document.getElementById('category-toggle');
  const categoryMenu = document.getElementById('category-menu');

  // Ensure the elements exist before adding event listeners
  if (burger && navItems) {
    // Toggle mobile menu
    burger.addEventListener('click', () => {
      navItems.classList.toggle('active');
    });
  }

  if (categoryToggle && categoryMenu) {
    // Toggle category dropdown menu
    categoryToggle.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      categoryMenu.classList.toggle('active');
    });

    // Close the category menu when clicking outside of it
    document.addEventListener('click', (e) => {
      if (!categoryMenu.contains(e.target) && !categoryToggle.contains(e.target)) {
        categoryMenu.classList.remove('active');
      }
    });

    // Prevent clicks inside the category menu from closing it
    categoryMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
}

// Call the function to load the navbar and footer when the page loads
loadContent();

//-----------------------------------------------------------------------------
