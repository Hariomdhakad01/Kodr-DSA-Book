// Q-8 ---- Compound interest A=P(1+r)t - CI = A-P

let p = Number(prompt("Enter Principal"));
let r = Number(prompt("Enter rate (%) :"))/100;
let t = Number(prompt("Enter time"));
let n = Number(prompt("Compounded how many time in an year"));



let amount = p * Math.pow((1 + r / n), n * t);

let CI = amount-p;

console.log("Total Amount :",amount,"and Compound interest :", CI)