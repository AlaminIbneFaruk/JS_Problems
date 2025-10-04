// Even Or odd
function evernOrOdd(num) {
  if (!isNaN(num)) {
    if (num % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Invalid Input";
  }
}
let num = prompt("Enter a number: ");
console.log(evernOrOdd(num));
