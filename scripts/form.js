const selectForm = document.getElementById("product");

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach(product => {

    option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;

    selectForm.appendChild(option)
})

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  let counter = parseInt(localStorage.getItem("reviewCounter") || '0');

  counter ++;

  localStorage.setItem("reviewCounter", counter);
});