import { addProduct } from "./bakset.js";
const templete = document.querySelector("template");
const productsList = document.getElementById("products");
const productTitle = document.getElementById("productTitle");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");
const productBrands = document.getElementById("productBrands");
const productRating = document.getElementById("productRating");
const productImage = document.getElementById("productImage");
const cardList = document.getElementById("card-list");
const cartTemplete = document.getElementById("cart-template");

function updateUI({ products }) {
  products.forEach((product) => {
    const { id, title, price, thumbnail, description: _description } = product;
    const clone = templete.content.cloneNode(true);
    const image = clone.querySelector(".clone-img");
    const cardTitle = clone.querySelector(".card-title");
    const description = clone.querySelector(".description");
    const a = clone.querySelector("a");
    const button = clone.querySelector(".but-button");

    button.addEventListener("click", (e) => {
      e.preventDefault();
      addProduct(product);
    });

    a.href = `./about.html?id=${id}`;
    image.src = thumbnail;
    cardTitle.textContent = title;
    description.textContent = _description;
    productsList.appendChild(clone);
  });
}

function updateUIAboutUI(product) {
  const { title, description, price, rating, brand, images } = product;
  productTitle.textContent = title;
  productDescription.textContent = description;
  productPrice.textContent = price;
  productBrands.textContent = brand;
  productRating.textContent = rating;
  productImage.src = images;
}

export function updateCardUI(products) {
  products.forEach((product) => {
    const { title, description, price, rating, brand, images } = product;

    const clone = cartTemplete.content.cloneNode(true);
    const productImage = clone.querySelector(".product-img");
    const productName = clone.querySelector(".name");
    const productBrands = clone.querySelector(".brand");
    const productPrice = clone.querySelector(".price");
    productImage.src = `${product.thumbnail}`;
    productName.textContent = title;
    productBrands.textContent = brand;
    productPrice.textContent = `${price}$`;
    cardList.appendChild(clone);
  });
}

export default updateUI;
export { updateUIAboutUI };
