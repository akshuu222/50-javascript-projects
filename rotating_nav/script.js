const openNav = document.querySelector(".open_btn");
const closeNav = document.querySelector(".close_btn");
const content = document.querySelector(".content");
const navCircle = document.querySelector(".nav_circle");
const navbar = document.querySelector(".navbar");

openNav.addEventListener("click", () => {
  content.classList.add("rotate");
  navCircle.classList.add("active");
  navbar.classList.add("open");
});

closeNav.addEventListener("click", () => {
  content.classList.remove("rotate");
  navCircle.classList.remove("active");
  navbar.classList.remove("open");
});
