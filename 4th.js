// maximum between two numbers
let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");
if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 > num2) console.log("The max num is:", num1) ;
  else console.log("The max num is:", num2);
} else {
  console.log("Invalid Input");
}
