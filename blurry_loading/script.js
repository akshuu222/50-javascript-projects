const image = document.querySelector(".image");
const counter = document.querySelector(".counter");
let totalBlur = 20; // can set anything
let decrement = totalBlur / 100;
let currentPercentage = -1;

const id = setInterval(() => {
  if (totalBlur < 0) {
    clearInterval(id);
  } else {
    totalBlur -= decrement;
    image.style.filter = `blur(${totalBlur}px)`;

    currentPercentage++;
    counter.textContent = `${currentPercentage}%`;
    counter.style.opacity = `${1 - currentPercentage / 100}`;
  }
}, 30);
