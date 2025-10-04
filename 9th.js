// Simple Calculator
let num1 = prompt("Enter 1st num: ");
let num2 = prompt("Enter 2nd num: ");
let op = prompt("Enter operator (+,-,*,/): ");
if (!isNaN(num1) && !isNaN(num2)) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (op === "+") {
    console.log("The sum is:", num1 + num2);
  } else if (op === "-") {
    console.log("The difference is:", num1 - num2);
  } else if (op === "*") {
    console.log("The product is:", num1 * num2);
  } else if (op === "/") {
    if (num2 !== 0) {
      console.log("The quotient is:", num1 / num2);
    } else {
      console.log("Error: Division by zero is not allowed.");
    }
  } else {
    console.log("Invalid operator.");
  }
} else {
  console.log("Invalid Input");
}
