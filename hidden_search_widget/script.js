const searchBtn = document.querySelector(".search_btn");
const userInput = document.querySelector(".user_input");



searchBtn.addEventListener("click",()=>{
  userInput.classList.toggle("show");
})