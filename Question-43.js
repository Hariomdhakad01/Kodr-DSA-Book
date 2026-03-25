// Q-43 check consonent and vowel using switch;

function consoVowel(cv){

switch(cv){
    case "a"|| "A": 
        console.log("It's Vowel");
        break;
    case "e"|| "E": 
        console.log("It's Vowel");
        break;
    case "i"|| "I": 
        console.log("It's Vowel");
        break;
    case "o"|| "O": 
        console.log("It's Vowel");
        break;
    case "u"|| "U": 
        console.log("It's Vowel");
        break;
    default:
        console.log("It's a Consonent");
    }

}
let cv = prompt("Enter Char to know Consonent or Vowel");
consoVowel(cv);