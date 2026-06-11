import { productsItems } from "../data/products-Item.js";


document.addEventListener("DOMContentLoaded", () => {

    addProductToDetailPage();
    //   addToDescription();
});



function addProductToDetailPage() {

    let productDetailHTML = "";

    let productId = new URLSearchParams(window.location.search).get("id");

    let productData;

    productsItems.forEach(product => {

        if (product.id === productId) {
            productData = product;
        }
    });


    if (!productData) {
        window.location.href = '/';
        return;
    };

    let images = "";
    productData.images.forEach(image => {
        // Add each image to the gallery
        images += `<img src="${image}">`
    });

    let rating = "";
    productData.rating.forEach(pRate => {
        rating += `<i class="${pRate}"></i>`;
    });
    // console.log(image)

    let productColor = "";
    productData.color.forEach(pColor => {
        productColor += `<input type="radio" name="color" id="${pColor}" value="${pColor}">
                            <label for="${pColor}" class="color black">${pColor}</label>`
    });

    let productSize = "";
    productData.color.forEach(pSize => {
        productSize += `<input type="radio" name="size" id="${pSize}" value="${pSize}">
                            <label for="${pSize} class="color black">${pSize}</label>`
    });



    productDetailHTML += `
    <div class="product-detail-container">
                <div class="product-images-ctr">
                    <div class="p-main-img" id="p-main-img">
                        <img src="${productData.mainImage}" alt="main-image">
                    </div>
                    <div class="p-other-img">
                        ${images}
                    </div>
                </div>
                <!-- product details -->
                <div class="product-details">
                    <span class="best-seller">Best Seller</span>

                    <div class="p-name">
                        <h1>${productData.name}</h1>
                    </div>

                    <div class="pd-rating">
                        <span class="rating">
                            ${rating}
                        </span>
                        <span class="review">
                            (${productData.count})
                        </span>
                    </div>

                    <div class="dp-price">
                        <div class="dp-new-price">
                            <h2>$${productData.price}</h2>
                        </div>
                        <div class="dp-old-p">
                            <span class="old-price">
                                $${productData.oldPrice}
                            </span>
                            <span class="discount">
                                (30% off)
                            </span>
                        </div>
                    </div>

                    <div class="product-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ex
                        quasi dolore quaerat sunt id ratione excepturi ipsa quisquam aliquam culpa dolorum
                        nostrum voluptas corrupti neque, natus aperiam laborum? Explicabo.
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
                                <button class="decrease">-</button>
                                <span class="p-quantity">1</span>
                                <button class="increase">+</button>
                            </div>
                            <div class="addBtn">
                                <button class="product-Add-Btn">
                                    <i class="ri-shopping-bag-4-line"></i> Add to Cart
                                </button>
                            </div>
                        </div>

                        <button class="byNow">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>`;

    document.getElementById("product-detail-section").innerHTML = productDetailHTML;

    let productLowerImages = "";

    let pLowerImages = productData.images.slice(1, 5);

    let lowerImage="";
    pLowerImages.forEach(image => {
        lowerImage += `<img src="${image}">`;
    });


    productLowerImages = `
    <div class="p-main-image">
                <img src="${productData.mainImage}" alt="main-image">
            </div>
            <div class="p-other-images">
                ${lowerImage}
            </div>`;

    const lowerProductImages = document.getElementById("product-images").innerHTML = productLowerImages;



}









let selectedQuantity = 1;

const quantityElement = document.getElementById("quantity");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

plusBtn.addEventListener("click", () => {
    selectedQuantity++;
    quantityElement.textContent = selectedQuantity;
});

minusBtn.addEventListener("click", () => {
    if (selectedQuantity > 1) {
        selectedQuantity--;
        quantityElement.textContent = selectedQuantity;
    }
});