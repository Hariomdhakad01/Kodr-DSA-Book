
// Q-40 print hello until user gives wrong input

function rightInp(inp){

   do{
        console.log("hello");
        inp = prompt("Enter 'y' to stop:");
    }
    while(inp==='y');

}

let input;
rightInp(input);