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
                              (${product.availableStock} Review)
                            </span>
                        </div>
                    </div>
                </a>`
    })
    document.querySelector("#product-container").innerHTML = productHTML;
};



















// // Jaise apne kaha ke product image agar mukhtalif naho to bhi chalega,
// // maine placeholder images laga di hain jo render houn gi.
// const dealsData = [
//     { title: "Smart Watch", price: "$49.99", oldPrice: "$60.00", discount: "50% off", rating: 4.5, reviews: 100, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
//     { title: "Wireless Earbuds", price: "$29.99", oldPrice: "$40.00", discount: "50% off", rating: 4.2, reviews: 86, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300" },
//     { title: "Backpack", price: "$22.99", oldPrice: "$45.00", discount: "50% off", rating: 4.7, reviews: 74, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300" },
//     { title: "Running Shoes", price: "$39.99", oldPrice: "$10.00", discount: "50% off", rating: 4.1, reviews: 74, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" },
//     { title: "Perfume", price: "$24.99", oldPrice: "$45.00", discount: "45% off", rating: 4.4, reviews: 86, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300" },
//     { title: "Sunglasses", price: "$15.99", oldPrice: "$40.00", discount: "40% off", rating: 4.0, reviews: 38, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300" }
// ];

// const bestSellersData = [
//     { title: "iPhone 14", price: "$699.00", oldPrice: "", discount: "", rating: 4.8, reviews: 120, img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=300" },
//     { title: "MacBook Air M2", price: "$1099.00", oldPrice: "", discount: "", rating: 4.9, reviews: 98, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300" },
//     { title: "Sony WH-1000XM4", price: "$279.00", oldPrice: "", discount: "", rating: 4.7, reviews: 150, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
//     { title: "Nike Air Max", price: "$129.00", oldPrice: "", discount: "", rating: 4.4, reviews: 110, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" },
//     { title: "Canon EOS 200D II", price: "$499.00", oldPrice: "", discount: "", rating: 4.6, reviews: 80, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300" },
//     { title: "Fire TV Stick 4K", price: "$49.99", oldPrice: "", discount: "", rating: 4.5, reviews: 105, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300" }
// ];

// function loadProducts(data, targetId) {
//     const grid = document.getElementById(targetId);
//     grid.innerHTML = data.map(prod => `
//                 <div class="product-card">
//                     <div class="product-img-wrapper">
//                         <img src="${prod.img}" alt="${prod.title}">
//                     </div>
//                     <div class="product-title">${prod.title}</div>
//                     <div class="price-container">
//                         <span class="current-price">${prod.price}</span>
//                         ${prod.oldPrice ? `<span class="old-price">${prod.oldPrice}</span>` : ''}
//                         ${prod.discount ? `<span class="discount-tag">(${prod.discount})</span>` : ''}
//                     </div>
//                     <div class="rating">
//                         ${'★'.repeat(Math.floor(prod.rating))}${'☆'.repeat(5 - Math.floor(prod.rating))}
//                         <span>(${prod.reviews})</span>
//                     </div>
//                 </div>
//             `).join('');
// }

// // Initialize Products Load////////////

// window.onload = function () {
//     loadProducts(dealsData, 'deals-grid');
//     loadProducts(bestSellersData, 'bestsellers-grid');
// };

// // Simple Cart click logic///////////
// let cartCount = 0;
// document.querySelectorAll('.product-card').forEach((card) => {
//     card.addEventListener('click', () => {
//         cartCount++;
//         document.querySelector('.cart-count').innerText = cartCount;
//     });
// });