// Even Or odd

let num = prompt("Enter a number: ");

if (!isNaN(num)) {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
} else {
  console.log("Invalid Input");
}

