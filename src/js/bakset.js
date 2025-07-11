let products = [];
const productAmount = document.getElementById("products-amount");

const changeBakset = () => {
  let amount = 0;
  products.forEach((product) => {
    amount += product.amount;
    productAmount.textContent = amount;
  });
};
export const addProduct = (p) => {
  let isAdded = products.find((product) => product.id == p.id);
  Toastify({
    text: "Maxsulot qo'shildi.",
    className: "info",
    gravity: "bottom",
    position: "right",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
  if (isAdded) {
    isAdded.amount += 1;
  } else {
    products.push({ ...p, amount: 1 });
  }
  changeBakset();
  console.log(isAdded);
  console.log(products);
};
