//pink tape cover functionality
const coversContainer = document.querySelector(".covers-container");
const ptCovers = Array.from(document.querySelectorAll(".pt-cover"));

let currentIndex = 0;

function goPrev() {
  currentIndex = (currentIndex - 1 + ptCovers.length) % ptCovers.length;
  slideImage();
}

function goNext() {
  currentIndex = (currentIndex + 1) % ptCovers.length;
  slideImage();
}

function slideImage() {
    coversContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

// username button functionality
let myButton = document.querySelector(".username-button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName();
}

function setUserName() {
    const myName = prompt("Please enter your name");
    if(!myName){
        myHeading.textContent = `The Pink Tape`;
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `The Pink Tape for ${myName}`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `The Pink Tape for ${storedName}`;
}