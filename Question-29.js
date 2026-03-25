// Q-29 Sum of all Even and Odd No. Seprately

function sumOfevenOdd(num){
    let evenSum = 0;
    let oddSum = 0;

 for(i=1;i<=num;i++){
    if(i%2===0){
       evenSum = evenSum+i;
    }
    else{
       oddSum = oddSum+i;
    }
 }
       console.log("Sum of all even :",evenSum);
       console.log("Sum of all odd:",oddSum);
}
let num = parseInt(prompt("Enter no."));
sumOfevenOdd(num);