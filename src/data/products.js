/** Contact & brand details from 3AMG Diwali Gifting Catalogue */
export const brand = {
  name: "3AMG",
  legalName: "3AMG COCOA PRIVATE LIMITED",
  productBrand: "Pearl & Purity Chocolate",
  tagline: "A Truly Indulgent Chocolate Experience.",
  email: "pearlpuritychoco@gmail.com",
  phones: ["+91-99305 20897", "+91-70813 36292"],
  gstin: "27AADCZ1245J1Z6",
  state: "Maharashtra, Code : 27",
  addressLines: [
    "A- Wing, 1st Floor, Shop No.59",
    "Gami Industrial Park",
    "TTC Industrial Area, MIDC Industrial Area, Pawne",
    "Navi Mumbai, Maharashtra — 400705",
  ],
  licenseNo: "No.-11526015000226",
  whatsapp: "919930520897",
}

export function whatsappLink(product) {
  const message = product
    ? `Hi 3AMG, I'm interested in the ${product.name} (Rs. ${Number(product.price).toLocaleString("en-IN")}). Please share availability and ordering details.`
    : "Hi 3AMG, I'd like to know more about your Pearl & Purity Diwali gift boxes. Please share details."
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`
}

export const brittleFlavours = [
  "Almond",
  "Coffee",
  "Brownie",
  "Pista",
  "Hazelnut",
  "Mango",
  "Strawberry",
  "Pineapple",
  "Rose",
  "Banarasi Paan",
]

/** Diwali gift boxes from 3AMG_Diwali Catalogue 2026.pdf */
export const products = [
  {
    id: "grand-indulgence",
    name: "Grand Indulgence Box",
    category: "gifting",
    image: "/products/product-01.jpg",
    catalogue: "/products/box-01.jpg",
    highlight: "Roca · Brittle · Cookies · Square Chocolate",
    price: 1999,
    contents: {
      Roca: ["Hazelnut 3 pcs", "Almond 3 pcs", "Almond Magic 3 pcs"],
      Brittle: ["Almond 3 pcs", "Coffee 3 pcs", "Brownie 3 pcs"],
      Cookies: ["Almond 3 pcs"],
      "Chocolate Coated": ["Oreo Almond 3 pcs", "Chocolate Pizza 3 pcs"],
      "Square Chocolate": [
        "Bambaiya Mithai 2 pcs",
        "Coffeanger 2 pcs",
        "Mango Chilli Masala 2 pcs",
        "Paan Masala 2 pcs",
        "Bubble Gum 2 pcs",
        "Roasted Almond 2 pcs",
      ],
    },
  },
  {
    id: "pearl-sampler",
    name: "Pearl Sampler Box",
    category: "gifting",
    image: "/products/product-02.jpg",
    catalogue: "/products/box-02.jpg",
    highlight: "Compact assorted chocolate experience",
    price: 999,
    contents: {
      Roca: ["Hazelnut 2 pcs", "Almond 2 pcs", "Almond Magic 2 pcs"],
      Brittle: ["Almond 2 pcs", "Coffee 2 pcs", "Brownie 2 pcs"],
      "Chocolate Coated": ["Oreo Almond 3 pcs"],
      "Square Chocolate": [
        "Coffeanger 2 pcs",
        "Mango Chilli Masala 2 pcs",
        "Bubble Gum 2 pcs",
        "Roasted Almond 2 pcs",
      ],
    },
  },
  {
    id: "peri-peri-diya",
    name: "Peri Peri Diya Box",
    category: "dry-fruits",
    image: "/products/product-03.jpg",
    catalogue: "/products/box-03.jpg",
    highlight: "Dry fruits with Diwali accessories",
    price: 599,
    contents: {
      "Dry Fruits": ["Peri Peri Cashew", "Schezwan Almond"],
      "Diwali Accessories": ["Diya 2 pcs"],
    },
  },
  {
    id: "barbeque-trio",
    name: "Barbeque Trio Box",
    category: "dry-fruits",
    image: "/products/product-04.jpg",
    catalogue: "/products/box-04.jpg",
    highlight: "Peri Peri · Barbeque · Salted Pista",
    price: 699,
    contents: {
      "Dry Fruits": ["Peri Peri Cashew", "Barbeque Almond", "Salted Pista"],
    },
  },
  {
    id: "chatpata-mix",
    name: "Chatpata Mix Box",
    category: "dry-fruits",
    image: "/products/product-05.jpg",
    catalogue: "/products/box-05.jpg",
    highlight: "Spicy & tangy dry fruit assortment",
    price: 699,
    contents: {
      "Dry Fruits": [
        "Salted Pista",
        "Peri Peri Cashew",
        "Chatpata Raisins",
        "Barbeque Almond",
      ],
    },
  },
  {
    id: "classic-nuts",
    name: "Classic Nuts Box",
    category: "dry-fruits",
    image: "/products/product-06.jpg",
    catalogue: "/products/box-06.jpg",
    highlight: "Salted & plain almonds, cashew & raisins",
    price: 599,
    contents: {
      "Dry Fruits": [
        "Salted Almond",
        "Plain Almond",
        "Chatpata Raisins",
        "Plain Cashew",
      ],
    },
  },
  {
    id: "utsav-teal",
    name: "Utsav Teal Box",
    category: "gifting",
    image: "/products/product-07.jpg",
    catalogue: "/products/box-07.jpg",
    highlight: "Dry fruits, brittle, square chocolate & roca",
    price: 1499,
    contents: {
      "Dry Fruits": ["Plain Cashew", "Plain Almond"],
      Brittle: ["Almond 4 pcs"],
      "Square Chocolate": [
        "Rice Crispy",
        "Paan Masala",
        "Coffee",
        "Cranberry",
        "Mix Nut",
        "Oreo",
      ],
      Roca: ["Hazelnut 3 pcs", "Almond 3 pcs", "Pista 3 pcs"],
    },
  },
  {
    id: "dried-fruits-deluxe",
    name: "Dried Fruits Deluxe",
    category: "dry-fruits",
    image: "/products/product-08.jpg",
    catalogue: "/products/box-08.jpg",
    highlight: "Exotic dried fruits & flavoured nuts",
    price: 1299,
    contents: {
      "Dried Fruits": [
        "Black Pepper Pineapple",
        "Masala Cranberry",
        "Kiwi Chaat",
        "Cherry Masala",
      ],
      "Dry Fruits": [
        "Peri Peri Cashew",
        "Chatpata Raisins",
        "Salted Pista",
        "Barbeque Almond",
      ],
    },
  },
  {
    id: "schezwan-festive",
    name: "Schezwan Festive Box",
    category: "gifting",
    image: "/products/product-09.jpg",
    catalogue: "/products/box-09.jpg",
    highlight: "Nuts, dried fruits, diya & toran",
    price: 1399,
    contents: {
      "Dry Fruits": [
        "Schezwan Almond",
        "Paper Pineapple",
        "Barbeque Cashew",
        "Salted Pista",
        "Chatpata Raisins",
      ],
      "Dried Fruits": ["Masala Cranberry", "Kiwi Chat"],
      "Diwali Accessories": ["Diya 2 pcs", "Toran 1 pc"],
    },
  },
  {
    id: "pudina-festive",
    name: "Pudina Festive Box",
    category: "gifting",
    image: "/products/product-10.jpg",
    catalogue: "/products/box-10.jpg",
    highlight: "Mint cashew with festive diya & toran",
    price: 1199,
    contents: {
      "Dry Fruits": [
        "Schezwan Almond",
        "Salted Pista",
        "Pudina Cashew",
        "Chatpata Raisins",
      ],
      "Diwali Accessories": ["Diya 2 pcs", "Toran 1 pc"],
    },
  },
  {
    id: "almond-cranberry",
    name: "Almond & Cranberry Box",
    category: "dry-fruits",
    image: "/products/product-11.jpg",
    catalogue: "/products/box-11.jpg",
    highlight: "Plain almond with masala cranberry",
    price: 499,
    contents: {
      "Dry Fruits": ["Plain Almond"],
      "Dried Fruits": ["Masala Cranberry"],
    },
  },
  {
    id: "brittle-trio",
    name: "Brittle Trio Box",
    category: "brittle",
    image: "/products/product-12.jpg",
    catalogue: "/products/box-12.jpg",
    highlight: "Almond · Coffee · Brownie — 4 pcs each",
    price: 499,
    contents: {
      Brittle: ["Almond 4 pcs", "Coffee 4 pcs", "Brownie 4 pcs"],
    },
  },
  {
    id: "plain-dry-fruits",
    name: "Plain Dry Fruits Box",
    category: "dry-fruits",
    image: "/products/product-13.jpg",
    catalogue: "/products/box-13.jpg",
    highlight: "Almond, pista, raisins & cashew",
    price: 599,
    contents: {
      "Dry Fruits": [
        "Plain Almond",
        "Plain Pista",
        "Plain Raisins",
        "Plain Cashew",
      ],
    },
  },
  {
    id: "roca-berry-festive",
    name: "Roca Berry Festive Box",
    category: "gifting",
    image: "/products/product-14.jpg",
    catalogue: "/products/box-14.jpg",
    highlight: "Roca, berry chocolates & diya",
    price: 899,
    contents: {
      Roca: ["Almond 6 pcs"],
      "Square Chocolate": ["Berry Berry 2 pcs", "Butter Butty 2 pcs", "Mini Puff 2 pcs"],
      "Diwali Accessories": ["Diya 2 pcs"],
    },
  },
  {
    id: "mango-chilly-box",
    name: "Mango Chilly Box",
    category: "gifting",
    image: "/products/product-15.jpg",
    catalogue: "/products/box-15.jpg",
    highlight: "Square chocolate with festive diya",
    price: 799,
    contents: {
      "Square Chocolate": [
        "Mango Chilly 3 pcs",
        "Paan Masala 3 pcs",
        "Mini Puff 3 pcs",
      ],
      "Diwali Accessories": ["Diya 2 pcs"],
    },
  },
  {
    id: "roca-diya-mini",
    name: "Roca Diya Mini Box",
    category: "gifting",
    image: "/products/product-16.jpg",
    catalogue: "/products/box-16.jpg",
    highlight: "Almond & hazelnut roca with diya",
    price: 599,
    contents: {
      Roca: ["Almond 3 pcs", "Hazelnut 3 pcs"],
      "Diwali Accessories": ["Diya 2 pcs"],
    },
  },
  {
    id: "fruity-fusion-festive",
    name: "Fruity Fusion Festive Box",
    category: "gifting",
    image: "/products/product-17.jpg",
    catalogue: "/products/box-17.jpg",
    highlight: "Assorted square chocolates & diya",
    price: 899,
    contents: {
      "Square Chocolate": [
        "Mini Puff 2 pcs",
        "Mango Chilly 2 pcs",
        "Berry Berry 2 pcs",
        "Paan Masala 2 pcs",
        "Butter Butty 2 pcs",
        "Fruity Fusion 2 pcs",
      ],
      "Diwali Accessories": ["Diya 2 pcs"],
    },
  },
  {
    id: "brittle-flavours",
    name: "Brittle Flavours Collection",
    category: "brittle",
    image: "/products/product-18.jpg",
    catalogue: "/products/box-18.jpg",
    highlight: "10 signature brittle flavours",
    price: 999,
    contents: {
      Brittle: brittleFlavours,
    },
  },
  {
    id: "haldi-kumkum-assorted",
    name: "Haldi Kumkum Assorted Box",
    category: "gifting",
    image: "/products/product-19.jpg",
    catalogue: "/products/box-19.jpg",
    highlight: "Square chocolate with traditional accessories",
    price: 1099,
    contents: {
      "Square Chocolate": [
        "Almond 2 pcs",
        "Coffee 2 pcs",
        "Mix Nut 2 pcs",
        "Rice Crispy 2 pcs",
        "Butter Scotch 2 pcs",
        "Tangy Orange 2 pcs",
      ],
      "Diwali Accessories": ["Diya 1 pc", "Haldi Kumkum Akshad 1 each"],
    },
  },
  {
    id: "stuffing-almond",
    name: "Stuffing Almond Box",
    category: "dates",
    image: "/products/product-20.jpg",
    catalogue: "/products/box-20.jpg",
    highlight: "Stuffed almonds — almond & pista",
    price: 699,
    contents: {
      "Stuffing Almond": ["Almond 6 pcs", "Pista 3 pcs"],
    },
  },
  {
    id: "gourmet-square-sampler",
    name: "Gourmet Square Sampler",
    category: "gifting",
    image: "/products/product-21.jpg",
    catalogue: "/products/box-21.jpg",
    highlight: "Fruity fusion, paan, oreo aura & more",
    price: 799,
    contents: {
      "Square Chocolate": [
        "Fruity Fusion 2 pcs",
        "Paan Masala 2 pcs",
        "Butter Butty 2 pcs",
        "Oreo Aura 2 pcs",
        "Berry Berry 2 pcs",
        "Hazelnut Hally 2 pcs",
      ],
    },
  },
  {
    id: "oreo-aura-box",
    name: "Oreo Aura Box",
    category: "gifting",
    image: "/products/product-22.jpg",
    catalogue: "/products/box-22.jpg",
    highlight: "Hazelnut, berry, oreo & mouth-fresh paan",
    price: 799,
    contents: {
      "Square Chocolate": [
        "Hazelnut Hally 3 pcs",
        "Berry Berry 3 pcs",
        "Oreo Aura 3 pcs",
        "Mouth Fresh Paan 3 pcs",
      ],
    },
  },
  {
    id: "roca-trio-3",
    name: "Roca Trio — 3 pcs",
    category: "roca",
    image: "/products/product-23.jpg",
    catalogue: "/products/box-23.jpg",
    highlight: "Almond · Pista · Hazelnut",
    price: 599,
    contents: {
      Roca: ["Almond 3 pcs", "Pista 3 pcs", "Hazelnut 3 pcs"],
    },
  },
  {
    id: "roca-trio-4",
    name: "Roca Trio — 4 pcs",
    category: "roca",
    image: "/products/product-24.jpg",
    catalogue: "/products/box-24.jpg",
    highlight: "Almond · Pista · Hazelnut — 4 pcs each",
    price: 799,
    contents: {
      Roca: ["Almond 4 pcs", "Pista 4 pcs", "Hazelnut 4 pcs"],
    },
  },
  {
    id: "roca-signature-15",
    name: "Roca Signature — 15 pcs",
    category: "roca",
    image: "/products/product-25.jpg",
    catalogue: "/products/box-25.jpg",
    highlight: "Almond 6 · Pista 3 · Hazelnut 6",
    price: 1199,
    contents: {
      Roca: ["Almond 6 pcs", "Pista 3 pcs", "Hazelnut 6 pcs"],
    },
  },
  {
    id: "roca-classic-18",
    name: "Roca Classic — 18 pcs",
    category: "roca",
    image: "/products/product-26.jpg",
    catalogue: "/products/box-26.jpg",
    highlight: "Almond · Pista · Hazelnut — 6 pcs each",
    price: 1399,
    contents: {
      Roca: ["Almond 6 pcs", "Pista 6 pcs", "Hazelnut 6 pcs"],
    },
  },
  {
    id: "roca-royale-24",
    name: "Roca Royale — 24 pcs",
    category: "roca",
    image: "/products/product-27.jpg",
    catalogue: "/products/box-27.jpg",
    highlight: "Almond · Pista · Hazelnut — 8 pcs each",
    price: 1799,
    contents: {
      Roca: ["Almond 8 pcs", "Pista 8 pcs", "Hazelnut 8 pcs"],
    },
  },
  {
    id: "roca-prestige-24",
    name: "Roca Prestige Box",
    category: "roca",
    image: "/products/product-28.jpg",
    catalogue: "/products/box-28.jpg",
    highlight: "Premium 24-piece roca presentation",
    price: 1899,
    contents: {
      Roca: ["Almond 8 pcs", "Pista 8 pcs", "Hazelnut 8 pcs"],
    },
  },
  {
    id: "stuffing-dates",
    name: "Stuffing Dates Box",
    category: "dates",
    image: "/products/product-29.jpg",
    catalogue: "/products/box-29.jpg",
    highlight: "Stuffed dates — almond & pista 9 pcs each",
    price: 899,
    contents: {
      "Stuffing Dates": ["Almond 9 pcs", "Pista 9 pcs"],
    },
  },
]

export const categories = [
  { id: "all", label: "Shop All" },
  { id: "gifting", label: "Gifting Collections" },
  { id: "brittle", label: "Brittle Range" },
  { id: "roca", label: "Roca" },
  { id: "dry-fruits", label: "Dry Fruits" },
  { id: "dates", label: "Stuffed Dates" },
]

export function getProduct(id) {
  return products.find((p) => p.id === id)
}

export function filterProducts(category) {
  if (!category || category === "all") return products
  return products.filter((p) => p.category === category)
}

export function formatPrice(price) {
  return `Rs. ${Number(price).toLocaleString("en-IN")}.00`
}
