// Q-35  Sum of digit of a number 

function sumDigit(num){
let sum = 0;
    let temp = 0;
 while(num>0){
    temp = num%10;
    num = Math.floor(num/10);
    sum  =sum+temp;
 }
 console.log(sum)
}
let num = parseInt(prompt("Enter no."));
sumDigit(num)