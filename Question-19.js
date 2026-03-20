
// Q-19  Leap year or not

function leapYear(yr){
    if((yr % 4===0 && yr % 100 !==0) || yr%400 === 0 ){
        console.log("Yeah This is Leap Year",yr);
    }else{
        console.log("No No this is Not a Leap Year",yr);
    }
}
let yr = Number(prompt("Enter year to check Leap year or Not")) !==0;
leapYear(yr);