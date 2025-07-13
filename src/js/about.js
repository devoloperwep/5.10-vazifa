import getData from "./request.js";
import { updateUIAboutUI } from "./update.js";
const titleEl = document.querySelector(".title");
let id = new URLSearchParams(document.location.search).get("id");

getData("https://dummyjson.com/product/" + id)
  .then((date) => updateUIAboutUI(date))
  .catch((err) => console.log(err));
