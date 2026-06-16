
///////  Product detail page: render + Add to Cart  ////////

// Get the products array
import { productsItems } from "../data/products-Item.js";

document.addEventListener("DOMContentLoaded", () => {
    addProductToDetailPage();
    updateNavCount();
});

//  Function for geting data from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Function for saving data in localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function for updating cart products quantity
export function updateNavCount() {
    const cart = getCart();
    const total = cart.reduce((s, i) => s + i.quantity, 0);
    const badge = document.querySelector(".cart-count");
    if (badge) badge.textContent = total;
}

// Function for product add in cart
function addToCart(productId, quantity, color, size) {
    // Validation
    if (!color) {
        showToast("Please select a color.", "error");
        return false;
    }
    if (!size) {
        showToast("Please select a size.", "error");
        return false;
    }

    const cart = getCart();

    // Check if same product with same color+size already exists
    const existingIdx = cart.findIndex(
        i => i.id === productId && i.color === color && i.size === size
    );

    if (existingIdx !== -1) {
        // Increase quantity
        cart[existingIdx].quantity += quantity;
    } else {
        // Add new entry
        cart.push({ id: productId, quantity, color, size });
    }

    saveCart(cart);
    updateNavCount();
    showToast("Item added to cart!", "success");
    return true;
}

///////  toast notification 

function showToast(message, type = "success") {
    // Remove existing toast
    const existing = document.getElementById("cart-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.id = "cart-toast";
    toast.textContent = message;

    const isSuccess = type === "success";
    Object.assign(toast.style, {
        position: "fixed",
        bottom: "28px",
        right: "28px",
        background: isSuccess ? "#111" : "#c0392b",
        color: "#fff",
        padding: "12px 22px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "500",
        zIndex: "9999",
        boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
        opacity: "0",
        transform: "translateY(12px)",
        transition: "opacity 0.25s, transform 0.25s",
    });

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    });

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(12px)";
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

//////////    build product detail page

function addProductToDetailPage() {
    const productId = new URLSearchParams(window.location.search).get("id");

    const productData = productsItems.find(p => p.id === productId);

    if (!productData) {
        window.location.href = "/";
        return;
    }

    ////   gallery images
    let images = "";
    productData.images.forEach(image => {
        images += `<img src="${image}" alt="${productData.name}">`;
    });

    /////   star rating
    let rating = "";
    productData.rating.forEach(pRate => {
        rating += `<i class="${pRate}"></i>`;
    });

    /////   color radio buttons
    let productColor = "";
    productData.color.forEach(pColor => {
        productColor += `
            <input type="radio" name="color" id="color-${pColor}" value="${pColor}">
            <label for="color-${pColor}" class="color">${pColor}</label>`;
    });

    /////   size radio buttons
    let productSize = "";
    productData.size.forEach(pSize => {
        productSize += `
            <input type="radio" name="size" id="size-${pSize}" value="${pSize}">
            <label for="size-${pSize}" class="size">${pSize}</label>`;
    });

    //////    main HTML
    const productDetailHTML = `
    <div class="product-detail-container">
        <div class="product-images-ctr">
            <div class="p-main-img" id="p-main-img">
                <img src="${productData.mainImage}" alt="${productData.name}">
            </div>
            <div class="p-other-img" id="p-other-img">
                ${images}
            </div>
        </div>

        <div class="product-details">
            <span class="best-seller">Best Seller</span>

            <div class="p-name">
                <h1>${productData.name}</h1>
            </div>

            <div class="pd-rating">
                <span class="rating">${rating}</span>
                <span class="review">(${productData.count} Review)</span>
            </div>

            <div class="dp-price">
                <div class="dp-new-price">
                    <h2>$${productData.price}</h2>
                </div>
                <div class="dp-old-p">
                    <span class="old-price">$${productData.oldPrice}</span>
                    <span class="discount">(${Math.round((1 - productData.price / productData.oldPrice) * 100)}% off)</span>
                </div>
            </div>

            <div class="product-description">
                ${productData.description}
            </div>

            <div class="color-section">
                <h3>Select Color</h3>
                <div class="product-colors product-details-input">
                    ${productColor}
                </div>
            </div>

            <div class="size-section">
                <h3>Select Size</h3>
                <div class="product-Size product-details-input">
                    ${productSize}
                </div>
            </div>

            <div class="pd-add-ctr">
                <div class="addToCart">
                    <div class="count">
                        <button class="decrease" id="minus">-</button>
                        <span class="p-quantity" id="quantity" data-product-id="${productData.id}">1</span>
                        <button class="increase" id="plus">+</button>
                    </div>
                    <div class="addBtn">
                        <button class="product-Add-Btn" id="product-Add-Btn" data-product-id="${productData.id}">
                            <i class="ri-shopping-bag-4-line"></i> Add to Cart
                        </button>
                    </div>
                </div>

                <button class="byNow" id="buy-now-btn">
                    Buy Now
                </button>
            </div>
        </div>
    </div>`;

    document.getElementById("product-detail-section").innerHTML = productDetailHTML;

    //////   Lower image section
    const pLowerImages = productData.images.slice(1, 5);
    let lowerImage = "";
    pLowerImages.forEach(image => {
        lowerImage += `<img src="${image}" alt="${productData.name}">`;
    });

    document.getElementById("product-images").innerHTML = `
        <div class="p-main-image">
            <img src="${productData.mainImage}" alt="${productData.name}">
        </div>
        <div class="p-other-images">${lowerImage}</div>`;

    ///////   Thumbnail click → main image swap
    const pMainImage = document.querySelector("#p-main-img img");
    document.querySelectorAll("#p-other-img img").forEach(img => {
        img.addEventListener("click", () => {
            pMainImage.src = img.src;
        });
    });

    //////   Quantity counter
    let selectedQuantity = 1;
    const quantityEl = document.getElementById("quantity");
    const plusBtn = document.getElementById("plus");
    const minusBtn = document.getElementById("minus");

    plusBtn.addEventListener("click", () => {
        selectedQuantity++;
        quantityEl.textContent = selectedQuantity;
    });

    minusBtn.addEventListener("click", () => {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            quantityEl.textContent = selectedQuantity;
        }
    });

    //////   Add to Cart button
    document.getElementById("product-Add-Btn").addEventListener("click", () => {
        const selectedColor = document.querySelector('input[name="color"]:checked')?.value || "";
        const selectedSize = document.querySelector('input[name="size"]:checked')?.value || "";
        addToCart(productData.id, selectedQuantity, selectedColor, selectedSize);
    });

    ///////  Buy Now button
    document.getElementById("buy-now-btn").addEventListener("click", () => {
        const selectedColor = document.querySelector('input[name="color"]:checked')?.value || "";
        const selectedSize = document.querySelector('input[name="size"]:checked')?.value || "";
        const added = addToCart(productData.id, selectedQuantity, selectedColor, selectedSize);
        if (added) {
            window.location.href = "cart.html";
        }
    });
}