
// Q-28 factorial of a number

function fact(num){
   let fact = 1;
    for(i=1;i<=num;i++){
          fact = fact*i;
    }
    console.log("Fact of no. :", fact)
}
let num = parseInt(prompt("Enter no. to get Fact."));
fact(num);
