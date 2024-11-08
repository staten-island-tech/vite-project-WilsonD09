import "../CSS/style.css";
import { gpu } from "./items";

let cardNum = 1;

function createCards(list) {
  list.forEach(
    (el) => (
      document.querySelector(".container").insertAdjacentHTML(
        "beforeend",
        `<div class="card" id="card-${cardNum}"><h3>${el["title"]}</h3>
          <img class="img" src=${el["imageUrl"]} alt="${el["altText"]}">
          
          <h5>Information:</h5>
          <ul>
          <li class="liSize">Release Year: ${el["releaseYear"]}</li>
          <li class="liSize">Price: $${el["price"]}</li>
          <li class="liSize">FPS in 1080p: ${el["fps1080p"]}</li>
          <li class="liSize">Company: ${el["company"]}</li></ul>
          <button id="zoom-${cardNum}">Zoom</button></div>`
      ),
      (cardNum += 1)
    )
  );
}
createCards(gpu);

function leastGreatest() {
  document.querySelector("#l-g").addEventListener("click", () => {
    document.querySelector(".container").innerHTML = "";
    createCards(gpu.sort((x, y) => x.price - y.price));
  });
}
function greatestLeast() {
  document.querySelector("#g-l").addEventListener("click", () => {
    document.querySelector(".container").innerHTML = "";
    createCards(gpu.sort((x, y) => y.price - x.price));
  });
}
greatestLeast();
leastGreatest();
