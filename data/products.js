export function getProduct(productId) {
  let matchingProduct;
  products.forEach(product => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

// Products items
export const productsItems = [
  {
    // product ID
    id: "p-001",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/01product/product-1.webp",
    // images URLs of this product
    images: ["assets/01product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "Male Jacket",
    // Product price
    price: 720,
    // old price
    oldPrice: 999,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
    availableStock: 1327,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-002",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/02product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-003",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/03product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-004",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/04product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-005",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/05product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-006",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/06product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-007",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/07product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-008",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/08product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-009",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/09product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-010",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/10product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-011",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/11product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-012",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/12product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-013",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/13product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-014",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/14product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-015",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/15product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-016",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/16product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-017",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/17product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
  {
    // product ID
    id: "p-018",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/18product/product-1.webp",
    // images URLs of this product
    images: ["assets/02product/product-1.webp, assets/01product/product-2.webp, assets/01product/product-3.webp, assets/01product/product-4.webp, assets/01product/product-5.webp"],
    // Product name
    name: "luxury Stylish Jacket",
    // Product price
    price: 870,
    // old price
    oldPrice:1150,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // Available stock count
     availableStock: 1127,
    // Product colors
    color: ["Brown, Blue, Red, Gray, Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },
]