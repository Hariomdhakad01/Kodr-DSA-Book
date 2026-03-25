// Q-36 Print reverse
 
function reverse(num){
     let rev = 0;
    let temp =0;
    while(num>0){
        temp = num%10;
        rev = rev *10+temp
        num = Math.floor(num/10);  
    }
    console.log("reverse no. :",rev)
}
let num = parseInt(prompt("Enter no."));
reverse(num);

