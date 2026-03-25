
// Q-31 print sum of all the Factor of a no.


function factor(num){
    let sum=0;
    for(i=1;i<=num;i++){
        if(num%i===0){
           sum=sum+i;
        }
    }
    console.log(sum)
}
let num = parseInt(prompt("Enter no. to get factor"));
factor(num);