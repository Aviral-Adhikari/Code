function addition() {
  let num1 = parseFloat(document.getElementById("firstNumber").value);
  let num2 = parseFloat(document.getElementById("secondNumber").value);
  let result = num1 + num2;

  document.getElementById("addition").innerHTML = "The sum is: " + result;
}

function subtraction() {
  let num1 = parseFloat(document.getElementById("firstNumber").value);
  let num2 = parseFloat(document.getElementById("secondNumber").value);
  let result = num1 - num2;

  document.getElementById("subtraction").innerHTML =
    "The subtraction is: " + result;
}

function multiplication() {
  let num1 = parseFloat(document.getElementById("firstNumber").value);
  let num2 = parseFloat(document.getElementById("secondNumber").value);
  let result = num1 * num2;

  document.getElementById("multiplication").innerHTML =
    "The multiplication is: " + result;
}

function division() {
  let num1 = parseFloat(document.getElementById("firstNumber").value);
  let num2 = parseFloat(document.getElementById("secondNumber").value);

  if (num2 === 0) {
    document.getElementById("division").innerHTML = "Cannot divide by zero";
  } else {
    let result = num1 / num2;
    document.getElementById("division").innerHTML =
      "The division is: " + result;
  }
}
