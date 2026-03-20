// Q-18 - Greater no. b/w - 3

function greatNum(n1,n2,n3){

    if(n1>n2 || n1>n3){
        console.log("No. 1 is Greater :",n1);
    }
    else if(n2>n3){
        console.log("No. 2 is Greater :", n2);
    }
    else{
        console.log("No. 3 is Greater :", n3)
    }
}
let num1 = Number(prompt("Enter no. 1"));
let num2 = Number(prompt("Enter no. 2"));
let num3 = Number(prompt("Enter no. 3"));

greatNum(num1,num2,num3)
