////////  swiper.js code   ///////

const swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 20,

    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    speed: 1000,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

});

////////   More category dropdown   //////

const moreB = document.getElementById("more");

moreB.addEventListener("click", (e) => {
    let category = document.getElementById("more-category").classList.toggle("show");
})

/////////  Sidebar Toggle  ////////

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});
document.addEventListener("click", (e) => {
    if (
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }
})

/////////   sidebar filter   /////////

const priceSlider = document.getElementById('price-slider');
const priceOutput = document.getElementById('price-output');
const clearAllBtn = document.getElementById('clear-all');
const applyFiltersBtn = document.getElementById('apply-filters');

// 1. Update Price Label Live on Slider Move
priceSlider.addEventListener('input', (e) => {
    priceOutput.textContent = `Max: $${e.target.value}`;
});

// 2. Clear All Filters Logic
clearAllBtn.addEventListener('click', () => {
    // Reset Price Slider
    priceSlider.value = 500;
    priceOutput.textContent = 'Max: $500';

    // Uncheck Colors
    const colorCheckboxes = document.querySelectorAll('input[name="color"]');
    colorCheckboxes.forEach(cb => cb.checked = false);

    // Uncheck Ratings
    const ratingRadios = document.querySelectorAll('input[name="rating"]');
    ratingRadios.forEach(radio => radio.checked = false);
});

// 3. Apply Filters Button Click (Console Data Check)
applyFiltersBtn.addEventListener('click', () => {
    // Selected Price
    const maxPrice = priceSlider.value;

    // Selected Colors
    const selectedColors = [];
    document.querySelectorAll('input[name="color"]:checked').forEach(cb => {
        selectedColors.push(cb.value);
    });

    // Selected Rating
    const selectedRatingElement = document.querySelector('input[name="rating"]:checked');
    const selectedRating = selectedRatingElement ? selectedRatingElement.value : 'None';

    // Output for testing (Aap yahan apni API call lagasakte hain)
    console.log("--- Applied Filters ---");
    console.log("Max Price:", `$${maxPrice}`);
    console.log("Colors:", selectedColors);
    console.log("Min Rating:", selectedRating);

    alert(`Filters Applied!\nPrice: $${maxPrice}\nColors: ${selectedColors.join(', ') || 'None'}\nRating: ${selectedRating} Stars & Up`);
});


///////////  CART UTILITIES  ///////////////

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
function updateNavCount() {
    const cart = getCart();
    const total = cart.reduce((s, i) => s + i.quantity, 0);
    document.querySelector('.cart-count').textContent = total;
}


//////////   product showing in webpage   ////////

import { productsItems } from "../data/products-item.js";

document.addEventListener("DOMContentLoaded", () => {
    showingProducts();
});

let productHTML = "";

function showingProducts() {
    productsItems.forEach(product => {

        let rating = "";

        product.rating.forEach(rate => {
            rating += `<i class="${rate}"></i>`
        })

        productHTML += `
        <a href="p-detail.html?id=${product.id}" class="product-card">
                    <div class="main-p-img">
                        <img src="${product.mainImage}" alt="product-img">
                    </div>
                    <div class="product-contant">
                        <div class="p-name">
                            <h2>${product.name}</h2>
                        </div>

                        <div class="p-price">
                            <div class="new-price">
                                <h3>$${product.price}</h3>
                            </div>
                            <div class="old-p">
                                <span class="old-price">
                                    $${product.oldPrice}
                                </span>
                                <span class="discount">
                                    (30% off)
                                </span>
                            </div>
                        </div>
                        <div class="p-rating">
                            <span class="rating">
                                ${rating}
                            </span>
                            <span class="available-stock">
                              (${product.count} Review)
                            </span>
                        </div>
                    </div>
                </a>`
    })
    document.querySelector("#product-container").innerHTML = productHTML;

    updateNavCount();
};