
// Q-15  Even or Odd Number

function evenOdd(no){
    if(no % 2 === 0){
        console.log("Even No. hai Bhai :",no);
    }
    else{
        console.log("Odd No. hai Bhai :",no);
    }
}
let no = parseInt(prompt("Enter no. to check Even or Odd"));
evenOdd(no)