// Q-22  Consonant or Vowels

function consoVowel(c){
    if(c==="a" || c==="e" || c==="i" || c==="o" || c==="u" || c==="A" || c==="E" || c==="I" || c==="O" || c==="U" ){
        console.log("You char is Vowel :",c)
    }
    else{
        console.log("your char is Consonent :",c)
    }

}

let char  = prompt("Enter char to check vowels or consonant");
consoVowel(char)