// voting eligibility
let age= prompt("Enter your age: ");
if(!isNaN(age)){
    if(age<18) console.log("Not Eligible for vote");
    else console.log("Eligible for vote");
}else{
    console.log("Invalid Input");
}