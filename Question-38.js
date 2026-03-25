
// Q-38  Strong No. or Not

function factorial(n){
   let fact = 1;
    for(i=1;i<=n;i++){
          fact = fact*i;
    }
   return fact;
}
function strong(num){
  let  temp=num;
  let sum = 0;
  let digit =0;

    while(num>0){
        digit = num%10;
     sum = sum+factorial(digit);
     num = Math.floor(num/10);
    }
  if(sum===temp){
    console.log("No. is Strong :",temp);
  }
  else{
    console.log("No. is Not Strong :",temp)
  }
}
let num = parseInt(prompt("Enter no."));
strong(num)