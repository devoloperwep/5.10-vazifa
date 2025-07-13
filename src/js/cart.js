import { updateCardUI } from "./update.js";
import { changeBakset } from "./bakset.js";
const localProduct = JSON.parse(localStorage.getItem("products"));

if (localProduct) {
  changeBakset(localProduct);
  updateCardUI(localProduct);
}
