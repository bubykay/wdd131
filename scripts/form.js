const selectProductElement = document.querySelector("#productName");

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];
console.log(selectProductElement, "selectProductElement");

function loadProductOptions() {
  products.map((product) => {
    const optionElement = document.createElement("option");
    optionElement.value = product.id;
    optionElement.innerText = product.name;
    selectProductElement.appendChild(optionElement);
  });
}

loadProductOptions();
