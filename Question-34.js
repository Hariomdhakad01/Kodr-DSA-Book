// Q-34  Separate each digit

function separate(num){
let temp = 0;
    while(num>0){
       temp = num%10;
       console.log(temp);
       num = Math.floor(num/10)
    }
}
let num = parseInt(prompt("Enter no."));
separate(num)