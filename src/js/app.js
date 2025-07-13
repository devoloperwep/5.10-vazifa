import getData from "./request.js";
import "./search.js";
import updateUI from "./update.js";
getData("https://dummyjson.com/product")
  .then((date) => updateUI(date))
  .catch((err) => console.log(err));
