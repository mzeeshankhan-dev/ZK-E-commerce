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
    images: ["./assets/e-commerce Products/01product/product-1.webp", "./assets/e-commerce Products/01product/product-2.webp", "./assets/e-commerce Products/01product/product-3.webp", "./assets/e-commerce Products/01product/product-4.webp", "./assets/e-commerce Products/01product/product-5.webp"],
    // Product name
    name: "Beige Winter Jacket",
    // Product description
    description: "Warm beige winter jacket with zipper closure, multiple pockets, comfortable fit, and stylish design.",
    // Product price
    price: 660,
    // old price
    oldPrice: 750,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 994,
    // Product colors
    color: ["Brown", "Blue", "Red", "White", "Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },

  {
    // product ID
    id: "p-002",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/02product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/02product/product-1.webp", "./assets/e-commerce Products/02product/product-2.webp", "./assets/e-commerce Products/02product/product-3.webp", "./assets/e-commerce Products/02product/product-4.webp", "./assets/e-commerce Products/02product/product-5.webp"],
    // Product name
    name: "Beige Casual Bomber Jacket",
    // Product description
    description: "Lightweight beige bomber jacket featuring minimalist style, front zipper, modern look, and comfort.",
    // Product price
    price: 850,
    // old price
    oldPrice: 999,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 1477,
    // Product colors
    color: ["Brown", "Blue", "Red", "Gray", "Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },

  {
    // product ID
    id: "p-003",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/03product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/03product/product-1.webp", "./assets/e-commerce Products/03product/product-2.webp", "./assets/e-commerce Products/03product/product-3.webp", "./assets/e-commerce Products/03product/product-4.webp", "./assets/e-commerce Products/03product/product-1.webp"],
    // Product name
    name: "Hooded Windbreaker Jacket",
    // Product description
    description: "Black hooded windbreaker jacket offering weather protection, sleek appearance, durability, and everyday comfort.",
    // Product price
    price: 750,
    // old price
    oldPrice: 980,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 1207,
    // Product colors
    color: ["Brown", "Blue", "Gray", "Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },

  {
    // product ID
    id: "p-004",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/04product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/04product/product-1.webp", "./assets/e-commerce Products/04product/product-2.webp", "./assets/e-commerce Products/04product/product-3.webp", "./assets/e-commerce Products/04product/product-4.webp", "./assets/e-commerce Products/04product/product-1.webp"],
    // Product name
    name: "Women Winter Parka Jacket",
    // Product description
    description: "A stylish and warm beige winter parka jacket featuring a cozy white faux-fur hood.",
    // Product price
    price: 700,
    // old price
    oldPrice: 950,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 2893,
    // Product colors
    color: ["Brown", "Blue", "pink", "Gray", "Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },

  {
    // product ID
    id: "p-005",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/05product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/05product/product-1.webp", "./assets/e-commerce Products/05product/product-2.webp", "./assets/e-commerce Products/05product/product-3.webp", "./assets/e-commerce Products/05product/product-4.webp", "./assets/e-commerce Products/05product/product-5.webp"],
    // Product name
    name: "Toddler Bear Ears Puffer Jacket",
    // Product description
    description: "An adorable and soft off-white puffer jacket designed with cute bear ears on the hood.",
    // Product price
    price: 480,
    // old price
    oldPrice: 600,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 3578,
    // Product colors
    color: ["White", "Brown", "Pink", "SkyBlue", "Black"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },

  {
    // product ID
    id: "p-006",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/06product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/06product/product-1.webp", "./assets/e-commerce Products/06product/product-2.webp", "./assets/e-commerce Products/06product/product-3.webp", "./assets/e-commerce Products/06product/product-4.webp", "./assets/e-commerce Products/06product/product-5.webp"],
    // Product name
    name: "Women's Floral Mesh Sneakers",
    // Product description
    description: "Comfortable and breathable purple casual slip-on sneakers adorned with beautiful floral embroidery.",
    // Product price
    price: 620,
    // old price
    oldPrice: 730,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 1839,
    // Product colors
    color: ["Pink", "Red", "Black"],
    // Product sizes
    size: ["39", "40", "41", "42"],
  },

  {
    // product ID
    id: "p-007",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/07product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/07product/product-1.webp", "./assets/e-commerce Products/07product/product-2.webp", "./assets/e-commerce Products/07product/product-3.webp", "./assets/e-commerce Products/07product/product-4.webp", "./assets/e-commerce Products/07product/product-1.webp"],
    // Product name
    name: "Men's Casual Leather Sneakers",
    // Product description
    description: "Trendy white leather shoes featuring a stylish brown contrast design perfect for casual wear.",
    // Product price
    price: 750,
    // old price
    oldPrice: 900,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 2397,
    // Product colors
    color: ["Brown", "White", "Black"],
    // Product sizes
    size: ["39", "40", "41", "42"],
  },

  {
    // product ID
    id: "p-008",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/08product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/08product/product-1.webp", "./assets/e-commerce Products/08product/product-2.webp", "./assets/e-commerce Products/08product/product-3.webp", "./assets/e-commerce Products/08product/product-4.webp", "./assets/e-commerce Products/08product/product-5.webp"],
    // Product name
    name: "Women's Elegant Bow Shoulder Handbag",
    // Product description
    description: "A classic black leather handbag detailed with a pretty bow and star-shaped charm hanger.",
    // Product price
    price: 840,
    // old price
    oldPrice: 999,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 3487,
    // Product colors
    color: ["Black", "Blue", "Red", "Pink", "Green"],
    // Product sizes
    size: ["Medium"],
  },

  {
    // product ID
    id: "p-009",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/09product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/09product/product-1.webp", "./assets/e-commerce Products/09product/product-2.webp", "./assets/e-commerce Products/09product/product-3.webp", "./assets/e-commerce Products/09product/product-4.webp", "./assets/e-commerce Products/09product/product-5.webp"],
    // Product name
    name: "Champion Men's Black Slim-Fit T-Shirt",
    // Product description
    description: "A sleek black casual short-sleeve t-shirt with the signature Champion logo on the chest.",
    // Product price
    price: 320,
    // old price
    oldPrice: 499,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 2739,
    // Product colors
    color: ["Brown", "Blue", "White", "Gray", "SkyBlue"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },

  {
    // product ID
    id: "p-010",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/10product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/10product/product-1.webp", "./assets/e-commerce Products/10product/product-2.webp", "./assets/e-commerce Products/10product/product-3.webp", "./assets/e-commerce Products/10product/product-4.webp", "./assets/e-commerce Products/10product/product-5.webp"],
    // Product name
    name: "Toddler Girls Graphic Print Black T-Shirt",
    // Product description
    description: "A cute black cotton t-shirt featuring a colorful graphic print of a girl wearing sunglasses.",
    // Product price
    price: 280,
    // old price
    oldPrice: 399,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 1827,
    // Product colors
    color: ["Black", "White", "Pink"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },

  {
    // product ID
    id: "p-011",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/11product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/11product/product-1.webp", "./assets/e-commerce Products/11product/product-2.webp", "./assets/e-commerce Products/11product/product-3.webp", "./assets/e-commerce Products/11product/product-4.webp", "./assets/e-commerce Products/11product/product-5.webp"],
    // Product name
    name: "Men's Luxury Gold Quartz Watch",
    // Product description
    description: "A premium golden metallic chain watch with a bold black dial and daytime calendar display.",
    // Product price
    price: 1299,
    // old price
    oldPrice: 1250,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 937,
    // Product colors
    color: ["White", "Black", "Gold"],
    // Product sizes
    size: ["OneSize"],
  },

  {
    // product ID
    id: "p-012",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/12product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/12product/product-1.webp", "./assets/e-commerce Products/12product/product-2.webp", "./assets/e-commerce Products/12product/product-3.webp", "./assets/e-commerce Products/12product/product-1.webp", "./assets/e-commerce Products/12product/product-5.webp"],
    // Product name
    name: "Men's Luxury Automatic Tourbillon Watch",
    // Product description
    description: "A high-end mechanical watch featuring a deep blue dial and a dual-tone silver-gold strap.",
    // Product price
    price: 1550,
    // old price
    oldPrice: 1630,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 1739,
    // Product colors
    color: ["White", "Blue", "Green", "Gold"],
    // Product sizes
    size: ["OneSize"],
  },

  {
    // product ID
    id: "p-013",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/13product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/13product/product-1.webp", "./assets/e-commerce Products/13product/product-2.webp", "./assets/e-commerce Products/13product/product-3.webp", "./assets/e-commerce Products/13product/product-4.webp", "./assets/e-commerce Products/13product/product-5.webp"],
    // Product name
    name: "Men's Slim-Fit 3-Piece Navy Blue Suit",
    // Product description
    description: "A classy navy blue formal three-piece suit including a sharp waistcoat for special occasions.",
    // Product price
    price: 1199,
    // old price
    oldPrice: 1250,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 1873,
    // Product colors
    color: ["Blue", "Black", "Purple"],
    // Product sizes
    size: ["Small", "Medium", "Large"],
  },

  {
    // product ID
    id: "p-015",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/14product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/14product/product-1.webp", "./assets/e-commerce Products/14product/product-2.webp", "./assets/e-commerce Products/14product/product-3.webp", "./assets/e-commerce Products/14product/product-4.webp", "./assets/e-commerce Products/14product/product-5.webp"],
    // Product name
    name: "Men's Casual Leather Flip-Flop Sandals",
    // Product description
    description: "Comfortable brown leather thong sandals designed with metallic studs and a durable black sole.",
    // Product price
    price: 760,
    // old price
    oldPrice: 930,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 3681,
    // Product colors
    color: ["Brown", "White", "Black"],
    // Product sizes
    size: ["39", "40", "41", "42"],
  },

  {
    // product ID
    id: "p-016",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/15product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/15product/product-1.webp", "./assets/e-commerce Products/15product/product-2.webp", "./assets/e-commerce Products/15product/product-3.webp", "./assets/e-commerce Products/15product/product-4.webp", "./assets/e-commerce Products/15product/product-5.webp"],
    // Product name
    name: "Women's Bow Slippers",
    // Product description
    description: "Pretty pink bow-knot open-toe slippers with a comfortable textured sole for indoor use.",
    // Product price
    price: 699,
    // old price
    oldPrice: 899,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 1233,
    // Product colors
    color: ["Pink", "White", "Red", "Black"],
    // Product sizes
    size: ["39", "40", "41", "42"]
  },

  {
    // product ID
    id: "p-017",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/16product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/16product/product-1.webp", "./assets/e-commerce Products/16product/product-2.webp", "./assets/e-commerce Products/16product/product-3.webp", "./assets/e-commerce Products/16product/product-4.webp", "./assets/e-commerce Products/16product/product-5.webp"],
    // Product name
    name: "Wireless Over-Ear Headphones",
    // Product description
    description: "Sleek matte black bluetooth headphones designed to provide superior sound quality and comfort.",
    // Product price
    price: 530,
    // old price
    oldPrice: 580,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 2823,
    // Product colors
    color: ["Black", "White", "Lavender", "cream"],
    // Product sizes
    size: ["OneSize"],
  },

  {
    // product ID
    id: "p-018",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/17product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/17product/product-1.webp", "./assets/e-commerce Products/17product/product-2.webp", "./assets/e-commerce Products/17product/product-3.webp", "./assets/e-commerce Products/17product/product-4.webp", "./assets/e-commerce Products/17product/product-5.webp"],
    // Product name
    name: "14.1-Inch Slim Portable Laptop",
    // Product description
    description: "A lightweight and slim silver laptop with a vibrant display for daily office work.",
    // Product price
    price: 1699,
    // old price
    oldPrice: 1799,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 2339,
    // Product colors
    color: ["White", "gray"],
    // Product sizes
    size: ["41.1 Inch"],
  },

  {
    // product ID
    id: "p-019",
    // URL of main image of the product
    mainImage: "./assets/e-commerce Products/18product/product-1.webp",
    // images URLs of this product
    images: ["./assets/e-commerce Products/18product/product-1.webp", "./assets/e-commerce Products/18product/product-2.webp", "./assets/e-commerce Products/18product/product-3.webp", "./assets/e-commerce Products/18product/product-4.webp", "./assets/e-commerce Products/18product/product-5.webp"],
    // Product name
    name: "Portable Mini Espresso Maker",
    // Product description
    description: "A compact, hand-operated mini espresso machine to brew fresh coffee anywhere while traveling.",
    // Product price
    price: 780,
    // old price
    oldPrice: 850,
    // Rating icons
    rating: ["ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-fill", "ri-star-line"],
    // review count
    count: 827,
    // Product colors
    color: ["Black", "White"],
    // Product sizes
    size: ["Small"],
  },

]