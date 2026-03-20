
// Q-10 surface area of sphere --4PIRsq


let rad = Number(prompt("Enter the Radius"))

let a =  4*Math.PI*rad*rad;
console.log("Surface area of Sphere = ",a)


// Q-10 By Using Finc. ---------- surface area of sphere


function surfaceAreaSphere(radius) {
    return 4 * Math.PI * radius * radius;
}

let r = 7;
let area = surfaceAreaSphere(r);

console.log("Surface Area:", area);