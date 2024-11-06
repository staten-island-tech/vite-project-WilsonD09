import "../CSS/style.css";
import { gpu } from "./items";

let cardNum = 1;

gpu.forEach(
  (el) =>
    document.querySelector(".container").insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="card-${cardNum}"><h3>${el["title"]}</h3>
        <img class="img" src=${el["imageUrl"]} alt="${el["altText"]}>
        <ul><h5>Information:</h5>
        <li class="liSize">Release Year: ${el["releaseYear"]}</li>
        <li class="liSize">Price: ${el["price"]}</li>
        <li class="liSize">FPS in 1080p: ${el["fps1080p"]}</li>
        <li class="liSize">Company: ${el["company"]}</li>
    </ul>
    </div>`
    ),
  cardNum++
);
