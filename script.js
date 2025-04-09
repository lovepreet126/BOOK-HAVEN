
// swipper home section

var swipper = new Swiper('.books-list', {
loop:true,
// centeredSlides:true,
autoplay: {
delay:9500,
disableOnInteraction:false,
},
breakpoints: {
// slidesPerView:1,
// 768:{
// slidesPerView:2,
// },
1024:{
slidesPerView: 3,
},
},
})
const prev=document.querySelector('.prev')
const next=document.querySelector('.next')
const wrapper=document.querySelector('.swiper-wrapper')
// featured section start
var swiper =new Swiper(".featured-slider", {
spaceBetween: 10,
loop:true,
centeredSlides:true,
autoplay: {
delay:9500,
disableOnInteraction:false
},
navigation:{
nextE1:".swiper-button-next",
prevEl:".swiper-button-prev",
},
breakpoints: {
0:{
slidesPerView:1,
},
768:{

    slidesPerView: 2,
},   
1024:{
    
    slidesPerView:4,
},   
    },
    
    });
// arrivals section
var swiper = new Swiper(".arrivals-slider", {
spaceBetween:10,
loop:true,
centeredSlides:true,
autoplay: {
delay:9500,
disableÕnInteraction:false,
},
breakpoints:{
0:{
slidesPerView:1,
},
768:{
slidesPerView:3
},
1024:{
slidesPerView: 4,
},
},
});
// reviews section starts
var swiper = new Swiper(".review-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay: {
    delay:9500,
    disableÕnInteraction:false,
    },
    breakpoints:{
        
        0:{
        
        slidesPerView:1,
        },
        768:{
        
        slidesPerView:3
        
        },
        
        1024:{
        
        slidesPerView: 4,
        
        },
    },
    });
// login form

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("loginForm");

        // On form submission
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from refreshing the page

            // Get the values
            const email = document.getElementById("email").value.trim();
            const rememberMe = document.getElementById("remember-me").checked;

            // Save to Local Storage
            localStorage.setItem("email", email);
            localStorage.setItem("rememberMe", rememberMe);

            // Redirect to a different page
            window.location.href = "dashboard.html"; // Change this to your target page
        });

        // Populate the email field if "remember me" was checked
        const savedEmail = localStorage.getItem("email");
        const isRemembered = localStorage.getItem("rememberMe") === "true";

        if (isRemembered && savedEmail) {
            document.getElementById("email").value = savedEmail;
            document.getElementById("remember-me").checked = true;
        }
    });


// seacrh bar button
function performSearch(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user's search input
    const searchInput = document.getElementById("search-box").value.trim().toLowerCase();
    console.log("Search Input:", searchInput);

    // Map of keywords to section IDs
    const searchMap = {
        "home": "home",
        "shop": "shop",
        "featured": "featured",
        "reviews": "reviews",
        "contact": "footer",
        "arrivals":"arrivals",
        "book": "featured",
        "best sellers":"best_sellers" // Add more keywords as needed
    };

    // Find the corresponding section ID
    const sectionId = searchMap[searchInput];
    console.log("Matched Section ID:", sectionId);

    // Scroll to the section or show an alert if not found
    if (sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    } else {
        alert("No matching section found. Try 'home', 'shop', 'featured', 'reviews', or 'contact'.");
    }
}


// add to cart
    // Initialize cart as an empty array
    const cart = [];

    // Function to add a book to the cart
    function addToCart(bookId, bookTitle, bookPrice) {
        const existingItem = cart.find(item => item.id === bookId);

        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if book is already in the cart
        } else {
            // Add new book to the cart
            cart.push({
                id: bookId,
                title: bookTitle,
                price: bookPrice,
                quantity: 1
            });
        }

        updateCartDisplay(); // Update the cart display
    }

    // Function to update the cart display
    function updateCartDisplay() {
        const cartContainer = document.getElementById('cart-container');
        cartContainer.innerHTML = ''; // Clear the cart container

        let totalItems = 0;
        cart.forEach(item => {
            totalItems += item.quantity;
        });
        

        // Update the cart icon with the total number of items
        cartContainer.textContent = `🛒 (${totalItems})`;


        // Optional: Display cart details (e.g., in a dropdown or modal)
        console.log(cart); // For debugging purposes
    }

    // Add event listeners to "Add to Cart" buttons
    document.addEventListener('DOMContentLoaded', () => {
        const addToCartButtons = document.querySelectorAll('.btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', event => {
                const bookBox = event.target.closest('.box');
                const bookId = bookBox.id;
                const bookTitle = bookBox.querySelector('h3').textContent;
                const bookPrice = bookBox.querySelector('.price').textContent.split(' ')[0].replace('$', '');

                addToCart(bookId, bookTitle, parseFloat(bookPrice));
            });
        });
    });
