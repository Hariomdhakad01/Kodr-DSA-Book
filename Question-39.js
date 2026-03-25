//  Q-39 Automorphic No.

function automorphic(num){
    let temp = num;
    let digits = 0;
    const sq = num*num

    while(temp>0){
    temp = Math.floor(temp/10);
        digits++;
    }
    let div = Math.pow(10,digits);

    if(sq%div===num){
        console.log("Automorphic no.",num);
    }
    else{
        console.log("Not Automorphic no.",num)
    }

}

let num = parseInt(prompt("enter no."));
automorphic(num)