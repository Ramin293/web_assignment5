const textInput = document.querySelector("#live-input");
const liveValue = document.querySelector("#live-value");

function showCurrentValue() {
  liveValue.textContent = textInput.value || "Nothing typed yet";
}

textInput.addEventListener("keyup", showCurrentValue);
textInput.addEventListener("input", showCurrentValue);
