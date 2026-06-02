//  swiper.js code


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
        dynamicBullets:true,
    },

});





// Jaise apne kaha ke product image agar mukhtalif naho to bhi chalega, 
        // maine placeholder images laga di hain jo render houn gi.
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
        //         <div class="product-card">
        //             <div class="product-img-wrapper">
        //                 <img src="${prod.img}" alt="${prod.title}">
        //             </div>
        //             <div class="product-title">${prod.title}</div>
        //             <div class="price-container">
        //                 <span class="current-price">${prod.price}</span>
        //                 ${prod.oldPrice ? `<span class="old-price">${prod.oldPrice}</span>` : ''}
        //                 ${prod.discount ? `<span class="discount-tag">(${prod.discount})</span>` : ''}
        //             </div>
        //             <div class="rating">
        //                 ${'★'.repeat(Math.floor(prod.rating))}${'☆'.repeat(5 - Math.floor(prod.rating))}
        //                 <span>(${prod.reviews})</span>
        //             </div>
        //         </div>
        //     `).join('');
        // }

        // Initialize Products Load////////////

        // window.onload = function() {
        //     loadProducts(dealsData, 'deals-grid');
        //     loadProducts(bestSellersData, 'bestsellers-grid');
        // };

        // Simple Cart click logic/////////// 
        // let cartCount = 0;
        // document.querySelectorAll('.product-card').forEach((card) => {
        //     card.addEventListener('click', () => {
        //         cartCount++;
        //         document.querySelector('.cart-count').innerText = cartCount;
        //     });
        // });