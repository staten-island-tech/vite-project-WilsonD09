import "../CSS/style.css";
import { gpu } from "./items";

const DOMSelectors = {
  container: document.querySelector(".container"),
};

function createCards(list) {
  list.forEach((el) => {
    const color = el.company === "NVIDIA" ? "green" : "red";
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="${color}"><h3>${el["title"]}</h3>
          <img class="img" src=${el["imageUrl"]} alt="${el["altText"]}">
          
          <h5>Information:</h5>
          <ul>
          <li class="liSize">Release Year: ${el["releaseYear"]}</li>
          <li class="liSize">Price: $${el["price"]}</li>
          <li class="liSize">FPS in 1080p: ${el["fps1080p"]}</li>
          <li class="liSize">Company: ${el["company"]}</li></ul>`
    );
  });
}
createCards(gpu);

document.querySelector("#showAll").addEventListener("click", () => {
  DOMSelectors.container.innerHTML = "";
  createCards(gpu);
});

function sortAMD() {
  document.querySelector("#sortAMD").addEventListener("click", () => {
    DOMSelectors.container.innerHTML = "";
    const AMD = gpu.filter((el) => el.company === "AMD");
    createCards(AMD);
  });
}
function sortnvd() {
  document.querySelector("#sortNVD").addEventListener("click", () => {
    DOMSelectors.container.innerHTML = "";
    const NVD = gpu.filter((el) => el.company === "NVIDIA");
    createCards(NVD);
  });
}

function leastGreatest() {
  document.querySelector("#l-g").addEventListener("click", () => {
    DOMSelectors.container.innerHTML = "";
    createCards(gpu.sort((x, y) => x.price - y.price));
  });
}
function greatestLeast() {
  document.querySelector("#g-l").addEventListener("click", () => {
    DOMSelectors.container.innerHTML = "";
    createCards(gpu.sort((x, y) => y.price - x.price));
  });
}
function themes() {
  document.querySelector("#changeTheme").addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });
}

themes();
greatestLeast();
leastGreatest();
sortAMD();
sortnvd();
