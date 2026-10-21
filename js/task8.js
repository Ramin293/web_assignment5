const tasks = [];
const form = document.querySelector("#todo-form");
const titleInput = document.querySelector("#todo-title");
const descriptionInput = document.querySelector("#todo-description");
const list = document.querySelector("#todo-list");
const emptyMessage = document.querySelector("#todo-empty");
let nextId = 1;

function renderTasks() {
  list.replaceChildren();
  emptyMessage.hidden = tasks.length > 0;

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = `todo-item${task.completed ? " completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark ${task.title} as completed`);
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      item.classList.toggle("completed", task.completed);
    });

    const copy = document.createElement("div");
    copy.className = "todo-copy";
    const title = document.createElement("span");
    title.className = "todo-title";
    title.textContent = task.title;
    copy.append(title);
    if (task.description) {
      const description = document.createElement("span");
      description.className = "todo-description";
      description.textContent = task.description;
      copy.append(description);
    }

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "button danger";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${task.title}`);
    deleteButton.addEventListener("click", () => {
      const index = tasks.findIndex((entry) => entry.id === task.id);
      tasks.splice(index, 1);
      renderTasks();
    });

    item.append(checkbox, copy, deleteButton);
    list.append(item);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (!title) {
    titleInput.focus();
    return;
  }

  tasks.push({ id: nextId++, title, description: descriptionInput.value.trim(), completed: false });
  form.reset();
  renderTasks();
  titleInput.focus();
});

renderTasks();
