const paragraph = document.querySelector("#changeable-text");
const changeButton = document.querySelector("#change-text");

changeButton.addEventListener("click", () => {
  paragraph.textContent = "The paragraph changed after you clicked the button!";
});
