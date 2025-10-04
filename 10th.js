// Ticket Price Discount

let age = prompt("Enter your age: ");
if (!isNaN(age) && age >= 0) {
  if (age < 10) console.log("Your ticket is free");
  else if (age >= 10 && age < 18)
    console.log("Your ticket price is ", 500 * 0.5);
  else if (age >= 18 && age < 60) console.log("Your ticket price is" , 500);
  else console.log("Your ticket price is ", 500 * 0.4);
} else {
  console.log("Invalid Input");
}
