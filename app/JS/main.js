import "../CSS/style.css";
import { gpu } from "./items";

cardNum = 1;

function cardCreate() {
  gpu.forEach((i) =>
    document.querySelector(".container").insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="card-${cardNum}"><h3>${i["title"]}</h3><ul ><h5>Information:</h5>
        <li class="liSize">Release Year: ${i["releaseYear"]}</li>
        <li class="liSize">Price: ${i["price"]}</li>
        <li class="liSize">FPS in 1080p: ${i["fps1080p"]}</li>
        <li class="liSize">Company: ${i["company"]}</li>
    </ul>
        </div>`
    )
  );
}
if (i["company"] === "AMD") {
  document.querySelector(`#card-${cardNum}`).style.backgroundColor = "red";
} else {
}
