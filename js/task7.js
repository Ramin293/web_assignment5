const firstInput = document.querySelector("#first-number");
const secondInput = document.querySelector("#second-number");
const result = document.querySelector("#result");

document.querySelectorAll("[data-operation]").forEach((button) => {
  button.addEventListener("click", () => {
    const first = Number(firstInput.value);
    const second = Number(secondInput.value);
    result.classList.remove("error");

    if (firstInput.value.trim() === "" || secondInput.value.trim() === "" || !Number.isFinite(first) || !Number.isFinite(second)) {
      result.textContent = "Enter two valid numbers first.";
      result.classList.add("error");
      return;
    }

    let answer;
    switch (button.dataset.operation) {
      case "add": answer = first + second; break;
      case "subtract": answer = first - second; break;
      case "multiply": answer = first * second; break;
      case "divide":
        if (second === 0) {
          result.textContent = "Cannot divide by zero.";
          result.classList.add("error");
          return;
        }
        answer = first / second;
        break;
    }

    result.textContent = `Result: ${Number.parseFloat(answer.toFixed(10))}`;
  });
});
