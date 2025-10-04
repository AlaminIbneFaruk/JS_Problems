// Positive ,Negative or Zero
function checkNumber(num) {
  if (!isNaN(num)) {
    if (num == 0) {
      return "Zero";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Positive";
    }
  } else {
    return "Invalid input";
  }
}
let num = prompt("enter a num: ");
console.log(checkNumber(num));
