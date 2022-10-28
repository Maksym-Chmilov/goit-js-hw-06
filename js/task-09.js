const changeColorBtn = document.querySelector(".change-color");
const colorBg = document.querySelector(".widget");
const colorText = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  colorBg.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
