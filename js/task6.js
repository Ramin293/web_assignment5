const textInput = document.querySelector("#live-input");
const liveValue = document.querySelector("#live-value");

textInput.addEventListener("keyup", () => {
  liveValue.textContent = textInput.value || "Nothing typed yet";
});
