// Q-51  Triangle pattern

for(let i=1;i<=5;i++){
     let row = "";
     // spaces
    for(let j = 1; j <= 5 - i; j++){
        row += " ";
    }

    // stars
    for(let j = 1; j <= i; j++){
        row += "* " ;
    }
    console.log(row)
}