// Q-9   Area of Triangle

   let a= Number(prompt("Enter the First Side of Tri.")) ; 
   let b= Number(prompt("Enter the Second Side of Tri.")) ;
   let c= Number(prompt("Enter the Third Side of Tri.")) ;

   let s = (a+b+c)/2;

   let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
   console.log("Area of Triangle = ",area)

// Q-9   Area of Triangle ----- By using Function 


function areaOfTri(a,b,c){
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area
}
console.log(areaOfTri(5,6,7))