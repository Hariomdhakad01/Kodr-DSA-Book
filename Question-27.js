// Q-27 Sum up to n terms

function sumNterm(num){
   let sum = 0;
    for(i=1;i<=num;i++){
          sum = sum+i;
    }
    console.log("Sum of All no. :", sum)
}
let num = parseInt(prompt("Enter no. to Sum up to n terms"));
sumNterm(num);