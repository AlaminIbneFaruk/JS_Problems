// Even Or odd 
function evernOrOdd(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
let num = prompt("Enter a number: ");
console.log(evernOrOdd(num));