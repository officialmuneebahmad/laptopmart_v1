      // Function to load the navbar and footer, and then initialize the menu
      function loadContent() {
        // Fetch the navbar HTML and insert it
        fetch('../../centralized-navbar/navbar.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('navbar').innerHTML = data;
            
            // Initialize dropdown and burger menu after navbar is loaded
            initializeMenu();
          })
          .catch(error => console.error('Error loading navbar:', error));

        // Fetch the footer HTML and insert it
        fetch('../../centralized-footer/footer.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('footer').innerHTML = data;
          })
          .catch(error => console.error('Error loading footer:', error));
      

              // Fetch the New deals HTML and insert it
        fetch('../../centralized-newdeals/newdeals.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('new-deals').innerHTML = data;
          })
          .catch(error => console.error('Error loading New Deals:', error));

          //Fetching Search code
        fetch('../../centralized-search/search.html')
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
//-------------------------------------------------

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

//................................................................

const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

const laptops = [
    {
        "id": 1,
        "name": "HP OMEN Laptop",
        "price": 300,
        "image": "https://www.laptopmart.shop/imgs/top%20trending/hp-omen.png",
        "description": "The HP OMEN Laptop 15.6\" | AMD Ryzen 7 5800H offers high performance with 16 GB DDR4 RAM, 1 TB NVMe SSD, a 144Hz FHD display, and an NVIDIA GeForce RTX 3060 GPU, making it ideal for gaming and multitasking."
    },
    {
        "id": 2,
        "name": "HP PROBOOK 445 G7",
        "price": 75,
        "image": "https://www.laptopmart.shop/imgs/show_more/1/hp-g7.avif",
        "description": "The HP ProBook 445 G7 - i7 10th Gen features 16GB DDR4 RAM, 256GB NVMe SSD, a 14.5\" Full HD display, and 2GB dedicated graphics for smooth performance and multitasking."
    },
    {
        "id": 3,
        "name": "HP PROBOOK 430 G7",
        "price": 85,
        "image": "https://www.laptopmart.shop/imgs/show_more/1/hp-430%20g7.jpg",
        "description": "The HP ProBook 430 G7 - i5 10th Gen offers 16GB DDR4 RAM, 256GB NVMe SSD, a 13.3\" Full HD display, and a backlit keyboard for enhanced productivity and portability."
    },
    {
        "id": 4,
        "name": "HP ELITEBOOK 1030 G3",
        "price": 90,
        "image": "https://www.laptopmart.shop/imgs/show_more/1/hp-1030-.png",
        "description": "The HP EliteBook 1030 G3 - i7 8th Gen features 16GB LPDDR4 RAM, upgradeable 512GB NVMe SSD, a 13.3\" Full HD IPS display, and a backlit keyboard for premium performance and sleek design."
    },
    {
        "id": 5,
        "name": "HP ELITEBOOK 820 G2",
        "price": 45,
        "image": "https://www.laptopmart.shop/imgs/most%20popular/820-g2.jpg",
        "description": "The HP EliteBook 820 G2 - Core i7 5th Gen offers 8GB DDR4 RAM, 128GB NVMe SSD, a 13.5\" HD display, and a slim design for portability and performance."
    },
    {
        "id": 6,
        "name": "HP ELITEBOOK 840 G4",
        "price": 65,
        "image": "https://www.laptopmart.shop/imgs/most%20popular/840-g4.png",
        "description": "The HP EliteBook 840 G4 - i7 7th Gen comes with 16GB DDR4 RAM, 256GB NVMe SSD, a 14.5\" FHD display, and lightweight design for high performance and easy portability."
    },
    {
        "id": 7,
        "name": "HP ELITEBOOK 850 G5",
        "price": 110,
        "image": "https://www.laptopmart.shop/imgs/most%20popular/850-g5.png",
        "description": "The HP EliteBook 850 G5 - i7 8th Gen features 16GB DDR4 RAM, 512GB NVMe SSD, a 15.6\" UHD touch display, and dual graphics with 8GB Intel and 2GB AMD Radeon 500 Series for superior performance."
    },
    {
        "id": 8,
        "name": "HP PROBOOK 440 G8",
        "price": 125,
        "image": "https://www.laptopmart.shop/imgs/most%20popular/440-g8.png",
        "description": "The HP ProBook 440 G8 - i5 11th Gen 'Tiger Lake' offers powerful performance with 11th Gen Intel technology, ensuring smooth multitasking and efficiency."
    },
    {
        "id": 9,
        "name": "HP PROBOOK 640 G2",
        "price": 45,
        "image": "https://www.laptopmart.shop/imgs/show_more/2/hp.png",
        "description": "The HP ProBook 640 G2 - i5 6th Gen comes with 8GB DDR4 RAM, 256GB NVMe SSD, a 14.5\" Full HD display, and a lightweight design for reliable performance on the go."
    },
    {
        "id": 10,
        "name": "HP ELITEBOOK 8470P",
        "price": 27,
        "image": "https://www.laptopmart.shop/imgs/discounted/13-hp-elitebook-8460p-core-i5-4gb-ram-500-gb-hdd-11.jpg",
        "description": "The HP EliteBook 8470P - i5 3rd Gen features 8GB DDR3 RAM, a 320GB fast HDD, a 14\" HD display, and a durable metal body for robust performance and reliability."
    },
    {
        "id": 11,
        "name": "HP ELITEBOOK 8770W",
        "price": 45,
        "image": "https://www.laptopmart.shop/imgs/discounted/img_gallery-8770w_four_01.jpg",
        "description": "The HP EliteBook 8770W - i7 3rd Gen offers 16GB DDR3 RAM, a 256GB SSD, a 17.3\" FHD IPS display, and a 4GB NVIDIA K4100 dedicated graphics card for powerful performance in demanding tasks."
    },
    {
        "id": 12,
        "name": "Hp Z-BOOK 15 G3",
        "price": 75,
        "image": "https://www.laptopmart.shop/imgs/discounted/hp-zbook.png",
        "description": "The HP ZBook 15 G3 - Xeon 8th Gen features 16GB DDR4 RAM, a 256GB NVMe SSD, a 15.6\" IPS 1080p display, and a 2GB dedicated NVIDIA graphics card for high-performance computing and graphics tasks."
    },
    {
        "id": 13,
        "name": "HP ELITEBOOK 840 G5",
        "price": 70,
        "image": "https://www.laptopmart.shop/imgs/discounted/840-g5.png",
        "description": "The HP EliteBook 840 G5 - i5 8th Gen features 16GB DDR4 RAM, a 256GB NVMe SSD, a 17.3\" FHD IPS display, and an 8GB graphics card, delivering robust performance for demanding applications."
    },
    {
        "id": 14,
        "name": "HP ELITEBOOK 640 G9",
        "price": 160,
        "image": "https://www.laptopmart.shop/imgs/show_more/1/640-g9.avif",
        "description": "The HP EliteBook 640 14\" G9 Notebook PC features an Intel Core i5-1265U processor, 16GB upgradeable RAM, a 512GB upgradeable NVMe SSD, and a 14\" Full HD display for excellent performance and flexibility."
    },
    {
        "id": 15,
        "name": "HP ZBOOK STUDIO (G7)",
        "price": 275,
        "image": "https://www.laptopmart.shop/imgs/top%20trending/zbook_studio_color_accuracy_ksp8.png",
        "description": "The HP ZBook Studio G7 is a powerful mobile workstation with a 10th Gen Intel Core i7, 32GB LPDDR4 RAM, and 512GB NVMe SSD. Its 15.6-inch edge-to-edge display and 4GB NVIDIA Quadro T1000 Max-Q make it ideal for high-end tasks."
    },
    {
        "id": 16,
        "name": "HP Elitebook 850 G5",
        "price": 100,
        "image": "https://www.laptopmart.shop/imgs/top%20trending/hp-850.png",
        "description": "The HP EliteBook 850 G5 features an 8th Gen Intel Core i7, 16GB DDR4 RAM, and 512GB NVMe SSD for ultra-fast performance. Its 15.6-inch UHD display, backlit keyboard, and 8GB Intel graphics make it ideal for gaming, rendering, freelancing, and online learning."
    },
    {
        "id": 17,
        "name": "HP ELITEBOOK 630 G10",
        "price": 100,
        "image": "https://www.laptopmart.shop/imgs/discounted/630-g10.avif",
        "description": "The HP Elitebook 630 G10 features a 13th gen Intel Core i7-1365U Hexacore processor, 16GB DDR4 RAM, and 512GB NVMe SSD for powerful performance. It has a 13.3-inch FHD IPS display and Intel UHD Graphics for crisp visuals."
    },
    
];

searchButton.addEventListener('click', () => {
    const searchTerm = searchBar.value.toLowerCase();

    if (searchTerm === '') {
        alert('Please enter a search term.');
        return;
    }

    const matchingLaptops = laptops.filter(laptop => laptop.name.toLowerCase().includes(searchTerm));

    searchResults.innerHTML = ''; // Clear previous results
    matchingLaptops.forEach(laptop => {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `
            <img src="${laptop.image}" alt="${laptop.name}">
            <h2>${laptop.name}</h2>
            <p>${laptop.description}</p>
            <p>Price: Rs.${laptop.price},000/-</p>
            <a href="../../all_products/product-${laptop.id}.html" class="view-product-button">View Product</a>
        `;

        searchResults.appendChild(resultItem);
    });
});