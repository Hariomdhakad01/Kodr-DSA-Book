// Q-42  Print Weekdays using Switch

function switchDay(num){
  
switch(num){
    case 1: 
        console.log("It's Monday");
        break;
    case 2: 
        console.log("It's Tuesday");
        break;
    case 3: 
        console.log("It's Wednesday");
        break;
    case 4: 
        console.log("It's Thursday");
        break;
    case 5: 
        console.log("It's Friday");
        break;
    case 6: 
        console.log("It's Saturday");
        break;
    case 7: 
        console.log("It's Sunday");
        break;

    default:
        console.log("Please Enter Valid No. from 1-7");
    }
}
let dayNum = parseInt(prompt(
            "Enter no. to get day:\n1. Monday\n2. Tuesday\n3. Wednesday\n4. Thursday\n5. Friday\n6. Saturday\n7. Sunday"
          ));
switchDay(dayNum);