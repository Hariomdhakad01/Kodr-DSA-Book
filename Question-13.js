// Q-13 Greeting on the basis og Gender -- I already done like 14



function greeting(gen){
    if("m"===gen || "M"===gen){
        console.log("Good Morning Sir");
    }
    else if("f"===gen || "F"===gen){
        console.log("Good Morning Ma,am");

    }
    else{
        console.log("Please enter Valid Gender - m / f Or M / F" )
    }
}
let gen  = prompt("Enter your Gender - m/f ");

greeting(gen)