import dogs from "./data.js";
import Dogs from "./Dog.js";

const disliked = document.getElementById("dislike");
const liked = document.getElementById("liked");




function render() {
  document.querySelector(".main-img").innerHTML = dogInfo.getDogInfoHtml()
}

let dogInfo = new Dogs(dogs.Teddy)


render()
