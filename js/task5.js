const hoverBox = document.querySelector("#hover-box");

function activateBox() {
  hoverBox.classList.add("is-hovered");
  hoverBox.textContent = "Mouse is over the box";
}

function resetBox() {
  hoverBox.classList.remove("is-hovered");
  hoverBox.textContent = "Move your mouse over this box";
}

hoverBox.addEventListener("mouseover", activateBox);
hoverBox.addEventListener("mouseout", resetBox);
hoverBox.addEventListener("focus", activateBox);
hoverBox.addEventListener("blur", resetBox);
