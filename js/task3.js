const block = document.querySelector("#style-block");
const blockText = document.querySelector("#style-text");

document.querySelector("#change-color").addEventListener("click", () => {
  block.style.backgroundColor = "#f7d7bc";
});

document.querySelector("#change-size").addEventListener("click", () => {
  blockText.style.fontSize = "25px";
});
