// Maximum between three numbers
let num1 = prompt("Enter 1st num: ");
let num2 = prompt("Enter 2nd num: ");
let num3 = prompt("Enter 3rd num: ");
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  if (num1 > num2 && num1 > num3) {
    console.log("num1 is the max and it is:", num1);
  } else if (num2 > num3) {
    console.log("num2 is the max and it is:", num2);
  } else if (num1 == num2 && num1 == num3) {
    console.log("All numbers are equal and it is:", num1);
  } else if (num1 == num2 && num1 > num3) {
    console.log("num1 and num2 are equal and max and it is:", num1);
  } else if (num2 == num3 && num2 > num1) {
    console.log("num2 and num3 are equal and max and it is:", num2);
  } else {
    console.log("num3 is the max and it is:", num3);
  }
} else {
  console.log("Invalid Input");
}
