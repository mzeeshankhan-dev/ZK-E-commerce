
///////  Cart page: render from localStorage + interactions

import { productsItems } from "../data/products-Item.js";

document.addEventListener("DOMContentLoaded", () => {
    renderCart();
    updateNavCount();
});

// Fonction for geting data from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Function for saving data in localStorage 
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// function for update product quantity
export function updateNavCount() {
    const cart = getCart();
    const total = cart.reduce((s, i) => s + i.quantity, 0);
    const badge = document.querySelector(".cart-count");
    if (badge) badge.textContent = total;
}

function getProductData(id) {
    return productsItems.find(p => p.id === id) || null;
}

// render whole cart

function renderCart() {
    const cart = getCart();
    const tbody = document.querySelector(".cart-table tbody");

    if (!tbody) return;

    if (cart.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; padding:48px 0; color:#888; font-size:15px;">
                    <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
                        <svg width="48" height="48" fill="none" stroke="#ccc" stroke-width="1.5" viewBox="0 0 24 24">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <path d="M16 10a4 4 0 01-8 0"/>
                        </svg>
                        <span>Your cart is empty</span>
                        <a href="index.html" style="color:#111;font-weight:600;font-size:13px;text-decoration:underline;">Continue Shopping</a>
                    </div>
                </td>
            </tr>`;
        updateSummaryUI(0, 0);
        return;
    }

    tbody.innerHTML = cart.map((item, idx) => {
        const product = getProductData(item.id);
        if (!product) return "";

        const lineTotal = product.price * item.quantity;

        return `
        <tr data-id="${item.id}" data-color="${item.color}" data-size="${item.size}">
            <td>
                <div class="product-cell">
                    <div class="product-img">
                        <img src="${product.mainImage}" alt="${product.name}" />
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-meta">Color: ${item.color}</div>
                        <div class="product-meta">Size: ${item.size}</div>
                        <div class="in-stock">In Stock</div>
                    </div>
                </div>
            </td>
            <td class="price-cell">$${product.price.toLocaleString()}</td>
            <td class="qty-cell">
                <div class="qty-control">
                    <button class="qty-btn" onclick="cartDecreaseQty(this)" aria-label="Decrease quantity">−</button>
                    <input class="qty-num" type="number" value="${item.quantity}" min="1" readonly />
                    <button class="qty-btn" onclick="cartIncreaseQty(this)" aria-label="Increase quantity">+</button>
                </div>
            </td>
            <td class="total-cell">$${lineTotal.toLocaleString()}</td>
            <td class="remove-cell">
                <button class="remove-btn" onclick="cartRemoveItem(this)" aria-label="Remove item">×</button>
            </td>
        </tr>`;
    }).join("");

    refreshSummary();
}

// quantity controls
window.cartIncreaseQty = function (btn) {
    const row = btn.closest("tr");
    changeQuantity(row, 1);
};

window.cartDecreaseQty = function (btn) {
    const row = btn.closest("tr");
    changeQuantity(row, -1);
};

function changeQuantity(row, delta) {
    const id = row.dataset.id;
    const color = row.dataset.color;
    const size = row.dataset.size;

    const cart = getCart();
    const itemIdx = cart.findIndex(i => i.id === id && i.color === color && i.size === size);

    if (itemIdx === -1) return;

    cart[itemIdx].quantity += delta;
    if (cart[itemIdx].quantity < 1) cart[itemIdx].quantity = 1;

    saveCart(cart);

    // update UI without full re-render
    const input = row.querySelector(".qty-num");
    input.value = cart[itemIdx].quantity;

    const product = getProductData(id);
    if (product) {
        const lineTotal = product.price * cart[itemIdx].quantity;
        row.querySelector(".total-cell").textContent = "$" + lineTotal.toLocaleString();
    }

    refreshSummary();
    updateNavCount();
}

// remove item

window.cartRemoveItem = function (btn) {
    const row = btn.closest("tr");
    const id = row.dataset.id;
    const color = row.dataset.color;
    const size = row.dataset.size;

    let cart = getCart();
    cart = cart.filter(i => !(i.id === id && i.color === color && i.size === size));
    saveCart(cart);

    // animate row removal
    row.style.transition = "opacity 0.25s, transform 0.25s";
    row.style.opacity = "0";
    row.style.transform = "translateX(20px)";
    setTimeout(() => {
        row.remove();
        if (getCart().length === 0) renderCart(); // show empty state
        refreshSummary();
        updateNavCount();
    }, 250);
};

// clear all

window.clearCart = function () {
    if (!confirm("Remove all items from your cart?")) return;
    saveCart([]);
    renderCart();
    updateNavCount();
};

// summary recalculation

function refreshSummary() {
    const cart = getCart();
    let subtotal = 0;
    let itemCount = 0;

    cart.forEach(item => {
        const product = getProductData(item.id);
        if (product) {
            subtotal += product.price * item.quantity;
            itemCount += item.quantity;
        }
    });

    updateSummaryUI(subtotal, itemCount);
}

function updateSummaryUI(subtotal, itemCount) {
    const subtotalEl = document.getElementById("subtotal");
    const totalEl = document.getElementById("total");
    const labelEl = document.querySelector(".summary-row .label");

    if (subtotalEl) subtotalEl.textContent = "$" + subtotal.toLocaleString();
    if (totalEl) totalEl.textContent = "$" + subtotal.toLocaleString();
    if (labelEl) labelEl.textContent = `Subtotal (${itemCount} item${itemCount !== 1 ? "s" : ""})`;
}

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