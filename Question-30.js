// Q-30 print all the Factor of a no.

function factor(num){
    for(i=1;i<=num;i++){
        if(num%i===0){
       console.log(i)
        }
    }
}
let num = parseInt(prompt("Enter no. to get factor"));
factor(num);