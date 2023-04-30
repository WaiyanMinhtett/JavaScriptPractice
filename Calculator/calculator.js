let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result");
let operation;

let errorOne = document.getElementById("errorOne");
let errorTwo = document.getElementById("errorTwo");
let errorOperator = document.getElementById("errorOperator");

errorOne.style.display = "none";
errorTwo.style.display = "none";
errorOperator.style.display = "none";

let errorOneStatus,
  errorTwoStatus,
  errorOperatorStatus = false;

calcBtn.addEventListener("click", function () {
  let num1 = document.getElementById("firstNumber");
  let num2 = document.getElementById("secondNumber");
  let operator = document.getElementById("operator");

  checkValidation(num1, num2, operator);

  if (!errorOneStatus && !errorTwoStatus & !errorOperatorStatus) {
    num1 = Number(num1.value);
    num2 = Number(num2.value);
    switch (operator.value) {
      case "addition":
        operation = num1 + num2;
        break;
      case "subtraction":
        operation = num1 - num2;
        break;
      case "multiplication":
        operation = num1 * num2;
        break;
      case "division":
        operation = num1 / num2;
        break;
    }
    result.innerHTML = operation;
  }
});

function checkValidation(num1, num2, operator) {
  if (num1.value == "" || num1.value == null || num1.value == undefined) {
    errorOne.style.display = "block";
    errorOneStatus = true;
  } else {
    errorOne.style.display = "none";
    errorOneStatus = false;
  }
  if (num2.value == "" || num2.value == null || num2.value == undefined) {
    errorTwo.style.display = "block";
    errorOneStatus = true;
  } else {
    errorTwo.style.display = "none";
    errorOneStatus = false;
  }
  if (
    operator.value == "default" ||
    operator.value == null ||
    operator.value == undefined
  ) {
    errorOperator.style.display = "block";
    errorOneStatus = true;
  } else {
    errorOperator.style.display = "none";
    errorOneStatus = false;
  }
}
