const input = document.getElementById("input");
const numbers = document.querySelectorAll(".numbers div");
const operators = document.querySelectorAll(".operator div");
const equal = document.getElementById("result");
const clear = document.getElementById("clear");




let currentNumber = "";
let operator = "";
let result = "";




numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    currentNumber += event.target.textContent;
    input.textContent = currentNumber;
  });
});




operators.forEach((op) => {
  op.addEventListener("click", (event) => {
    operator = event.target.textContent;
    result = currentNumber;
    currentNumber = "";
    input.textContent = operator;
  });
});



equal.addEventListener("click", () => {
  if (currentNumber !== "") {
    switch (operator) {
      case "+":
        result = parseFloat(result) + parseFloat(currentNumber);
        break;
      case "-":
        result = parseFloat(result) - parseFloat(currentNumber);
        break;
      case "*":
        result = parseFloat(result) * parseFloat(currentNumber);
        break;
      case "/":
        result = parseFloat(result) / parseFloat(currentNumber);
        break;
      default:
        result = "";
    }
    input.textContent = result;
    currentNumber = result;
    operator = "";
  }
});



clear.addEventListener("click", () => {
  currentNumber = "";
  operator = "";
  result = "";
  input.textContent = "";
});
