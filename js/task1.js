const studentName = "Ramin Smagulov"; // string
const group = "SE-2529"; // string
const firstNumber = 12; // number
const secondNumber = 4; // number
const isFrontendStudent = true; // boolean

console.log("Student: " + studentName + ", group: " + group);
console.log("Frontend student:", isFrontendStudent);
console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);

document.querySelector("#student-output").textContent =
  "Student: " + studentName + " | Group: " + group + " | Frontend student: " + isFrontendStudent;
document.querySelector("#math-output").textContent =
  `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}; ` +
  `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}; ` +
  `${firstNumber} × ${secondNumber} = ${firstNumber * secondNumber}; ` +
  `${firstNumber} ÷ ${secondNumber} = ${firstNumber / secondNumber}`;
