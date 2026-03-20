// Q-17  Print week Day

function dayNum(day){
    if(1===day){
        console.log("Monday")
    }
    else if(2===day){
        console.log("Tuesday")
    }
    else if(3===day){
        console.log("Wednesday")
    }
    else if(4===day){
        console.log("Thursday")
    }
    else if(5===day){
        console.log("Friday")
    }
    else if(6===day){
        console.log("Saturday")
    }
    else if(7===day){
        console.log("Sunday")
    }
    else{
        console.log("There are Only Seven Days not :", day)
    }
}
let day = Number(prompt("Enter Day no. I will tell you the Day"));

dayNum(day)