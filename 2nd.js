// Positive ,Negative or Zero

let num = prompt("enter a num: ");

  if (!isNaN(num)) {
    if (num == 0) {
      console.log("Zero")   ;
    } else if (num < 0) {
      console.log("Negative");
    } else {
      console.log("Positive");
    } 
  } else {
    console.log("Invalid input");
  }


