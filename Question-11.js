// Q-11  Area of Circumference and area of Circle

// Circumference

function ArofCircum(r){
    const area = 2*Math.PI*r;
    return area;

}
let r = Number(prompt("Enter the Radius"))
console.log("Area of Circumference is :",ArofCircum(r))


// Circle 

function circle(r){
    
    const area = Math.PI*r*r;
    return area;
}
let rad = Number(prompt("Enter the Radius"))
console.log("Area of Circle is :",circle(rad))