// Q-37 palindromic or not 
 
function palindrome(num){
     let rev = 0;
    let temp =0;
   let ogNum = num;
    while(num>0){
        temp = num%10;
        rev = rev *10+temp
        num = Math.floor(num/10);  
    }
    if(rev===ogNum){
    console.log("No. is palindrome :", ogNum)
}
else{
    console.log("No. is not palindrome :",ogNum)
}  
}
let num = parseInt(prompt("Enter no."));
palindrome(num);
