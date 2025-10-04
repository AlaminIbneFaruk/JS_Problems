// Pass or Fail
let marks = prompt("Enter your marks: ");
if (!isNaN(marks)) {
  if (marks > 0 && marks < 39) console.log("Fail");
  else console.log("Pass");
} else {
  console.log("Invalid Input");
}
