
// Q-16   Eligible to vote

function canVote(name, age){
    if(age>=18){
        console.log("Hello ,",name,"You are a Valid Voter");
    }else{
        console.log("Sorry yrr",name,"Abhi tum bachhe ho");
    }

};
let name  = prompt("Enter your name");
let age = Number(prompt("Enter your age"));
canVote(name,age);
