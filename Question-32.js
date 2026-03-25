
// Q-32  no. is prime or not

function prime(num){

    if(num<=1){
    return console.log("Not Prime");
    }
    for(i=2;i<num;i++){
        if(num%i===0){
      return console.log("Not Prime no.");
        }
     
    }
    return console.log("yeah No. is prime")
}

let num = parseInt(prompt("Enter no. to Check Prime or not"));
prime(num);