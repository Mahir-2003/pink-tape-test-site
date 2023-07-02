// const myImage = document.querySelectorAll("img")[1];

// myImage.onclick = () => {
//     const mySrc = myImage.getAttribute("src");
//     console.log(mySrc);
//     if(mySrc === "images/pinktape!.jpeg"){
//         myImage.setAttribute("src", "images/pinktape!-alternate.webp");
//     } else {
//         myImage.setAttribute("src", "images/pinktape!.jpeg");
//     }
// };

// cool sliding animation (automatic)
// const covers = document.querySelectorAll(".pt-covers");
// let counter = 0;
// covers[0].style.transform = `translateX(-50%)`;
// covers[1].style.transform = `translateX(50%)`;

// const covers = document.querySelectorAll(".pt-covers");
// let isSecondImage = false;
// // covers.forEach(
// //     (slide, index) => {
// //         slide.style.left = `${index * 25}%`;
// //     }
// // )

// function goPrev() {
//     isSecondImage = false;
//     slideImage();
// }

// const goNext = () => {
//     isSecondImage = true;;
//     slideImage();
// }

// const slideImage = () => {
//     covers.forEach((slide, index) => {
//             // slide.style.transform = `translateX(-${counter * 100}%)`;
//             slide.style.transition = "all 1s";
//             slide.style.zIndex = isSecondImage ? (index === 1 ? 1 : 0) : (index === 0 ? 1 : 0);
//         }
//     )

//     // Add a delay before resetting the transform property
//     setTimeout(() => {
//         covers.forEach((slide) => {
//             slide.style.transform = "";
//         });
//     }, 1000);
// }

const coversContainer = document.querySelector(".covers-container");
let isSecondImage = false;

function goPrev() {
  isSecondImage = false;
  slideImage();
}

function goNext() {
  isSecondImage = true;
  slideImage();
}

function slideImage() {
  coversContainer.style.transform = `translateX(-${isSecondImage ? "100%" : "0"})`;

//   setTimeout(() => {
//     coversContainer.style.transform = "";
//   }, 1000);
}
