
// Q-33  raised power of B

function power(num1,num2){
 let pow = 1;
    for(i=1;i<=num2;i++){
      pow = pow*num1;
    }
    console.log("And the Output is :",pow)

}
let num1 = parseInt(prompt("Enter no. 1"));
let num2 = parseInt(prompt("Enter no. 2"));
console.log("No.-1 is :",num1,"& No.-2 is :",num2)
power(num1,num2)