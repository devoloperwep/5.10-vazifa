import { changeBakset } from "./bakset.js";
// import { updateCardUI } from "./update.js";
const localProduct = localStorage.getItem("products");

if (localProduct) {
  changeBakset(localProduct);
  updateCardUI(localProduct);
}
