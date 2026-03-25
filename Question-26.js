// Q-26 Print Table

function prntTable(n){
    for(i=1;i<=10;i++){
        console.log(n,' X ',i,' = ' ,n*i);
    }
}

let n = Number(prompt("Enter a number: "));

prntTable(n);