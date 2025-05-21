
const prev_btn = document.querySelector(".prev_btn");
const next_btn = document.querySelector(".next_btn");
const step = document.querySelectorAll(".step");
const progress = document.querySelector(".progress");

let currStep = 0;
let totalSteps  = step.length;

function calculatePercentage(step) {
  const container_bars_width =
    document.querySelector(".container_bars").offsetWidth;
  const gap = 48;
  const newValue = container_bars_width - (25 + gap);
  const percentageChange =
    ((newValue - container_bars_width) / container_bars_width) * 100;
  return Math.abs(percentageChange);
}

const percentageChange = calculatePercentage(step);

next_btn.addEventListener("click", () => {
  if (currStep < totalSteps - 1) {
    currStep++;
    if (currStep === 1) {
      prev_btn.classList.remove("btn_disable");
    }
    step[currStep].classList.add("step_active");
    progress.style.width = `${currStep * percentageChange}%`;
    if (currStep === totalSteps - 1) {
      next_btn.classList.add("btn_disable");
    }
  }
});

prev_btn.addEventListener("click", () => {
  if (currStep > 0) {
    step[currStep].classList.remove("step_active");
    currStep--;
    progress.style.width = `${currStep * percentageChange}%`;
    if (currStep === 0) {
      prev_btn.classList.add("btn_disable");
    }
    if (currStep === totalSteps - 2) {
      next_btn.classList.remove("btn_disable");
    }
  }
});
