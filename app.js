const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "pink"];

const button = document.getElementById("btn");
const colorText = document.getElementById("color");

button.addEventListener("click", () => {
  let randomNumber = Math.ceil(Math.random() * colors.length) - 1;
  document.body.style.background = colors[randomNumber];
  colorText.textContent = colors[randomNumber];
});
