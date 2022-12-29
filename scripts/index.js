import dogs from "./data.js";
import Dogs from "./Dog.js";

const imgCreate = document.createElement("img");
let currentDogIndex = 0;
let currentDog = new Dogs(dogs[currentDogIndex]);

function getNewDog() {
  if (currentDogIndex < 2) {
    currentDogIndex += 1;
    currentDog = new Dogs(dogs[currentDogIndex]);
    render();
  } else {
document.querySelector(".main-img").innerHTML = `<p id="end-of-array">
Sorry, no more single dogs near your area!
</p>`
  }
}

function yes() {
  currentDog.setMatchStatus(true);
  getNewDog();
}

function no() {
  currentDog.setMatchStatus(false);
  getNewDog();
}

function render() {
  document.querySelector(".main-img").innerHTML = currentDog.getDogInfoHtml();
}

render();

document.querySelector(".buttons").addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  if (event.target.id === "dislike") {
    imgCreate.src = "images/badge-nope.png";
    document.querySelector(".nope-like-img").appendChild(imgCreate);
    setTimeout(no, 800);
  } else if (event.target.id === "liked") {
    imgCreate.src = "images/badge-like.png";
    document.querySelector(".nope-like-img").appendChild(imgCreate);
    setTimeout(yes, 800);
  }
});
