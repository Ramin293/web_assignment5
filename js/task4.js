const list = document.querySelector("#item-list");
const count = document.querySelector("#item-count");
let nextNumber = 1;

function updateCount() {
  count.textContent = `${list.children.length} item${list.children.length === 1 ? "" : "s"} in the list`;
}

document.querySelector("#add-item").addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = `Item ${nextNumber}`;
  list.append(item);
  nextNumber += 1;
  updateCount();
});

document.querySelector("#remove-item").addEventListener("click", () => {
  if (list.lastElementChild) list.lastElementChild.remove();
  updateCount();
});

updateCount();
