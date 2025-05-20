const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");

function addClassAndRemove(cards, idx, currentTarget) {
  if (idx >= cards.length) {
    return;
  }
  if (cards[idx] === currentTarget) {
    if (!cards[idx].classList.contains("active")) {
      cards[idx].classList.add("active");
    }
  } else {
    cards[idx].classList.remove("active");
  }
  addClassAndRemove(cards, idx + 1, currentTarget);
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", (e) => {
    addClassAndRemove(cards, 0, e.currentTarget);
  });
}
