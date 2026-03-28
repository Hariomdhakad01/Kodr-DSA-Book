// Q-48  Right triangle - Alphabet Pattern

for(let i=1;i<=5;i++){
     let row = " ";
    for(let j=1;j<=i;j++){
        row = row +String.fromCharCode(64 + j )+ " " ;
    }
    console.log(row)
}