const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const colorText = document.getElementById("color");

button.addEventListener("click", () => {
  let hexColorCode = "#";
  for (let i = 1; i <= 6; i++) {
    randomNumber = Math.ceil(Math.random() * hex.length) - 1;
    hexColorCode += hex[randomNumber];
  }
  document.body.style.background = hexColorCode;
  colorText.textContent = hexColorCode;
});
