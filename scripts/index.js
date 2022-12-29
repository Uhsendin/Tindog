import dogs from "./data.js";
import Dogs from "./Dog.js";

const disliked = document.getElementById("dislike");
const liked = document.getElementById("liked");
const imgCreate = document.createElement("img")


document.querySelector(".buttons").addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
if (event.target.id === "dislike") {
  document.getElementById("dislike").style.backgroundColor =  "#FFE7EF"
  imgCreate.src = "images/badge-nope.png"
  document.querySelector(".nope-like-img").appendChild(imgCreate)
  
} else if (event.target.id === "liked") {
  document.getElementById("liked").style.backgroundColor = "#DBFFF4"
  imgCreate.src = "images/badge-like.png"
  document.querySelector(".nope-like-img").appendChild(imgCreate)
}
  
})






function render() {
  document.querySelector(".main-img").innerHTML = dogInfo.getDogInfoHtml()
}

let dogInfo = new Dogs(dogs.Teddy)


render()

