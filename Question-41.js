// Q-41 choice based calc 

function choiceCalc(n1,n2){
    let choice;
    let result;

    do{
          n1= parseInt(prompt("enter no. 1"));
          n2= parseInt(prompt("enter no. 2"));

          choice = parseInt(prompt(
            "Choose operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit"
          ));


          switch(choice){
            case 1:
                result = n1 + n2;
                console.log("Sum karna tha", result);
                break;

            case 2:
                result = n1 - n2;
                console.log("Ohh minus krna tha", result);
                break;

            case 3:
                result = n1 * n2;
                console.log("Achha multi krna tha", result);
                break;

            case 4:
                if(n2===0){
                console.log("Bhai Sahabb aap zero se divide nhi kr skte");
                }
                else{
                result = n1 / n2;
                console.log("thik hai divide kr dete hain", result);
                }
                break;

            case 5:
                console.log("Exiting Calculater....");
                break;
                
            default:
                console.log("Invalid Choice")
          }

    }while(choice <5){
    }
}
let num1 ;
let num2 ;
choiceCalc(num1,num2);
