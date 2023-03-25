// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7 

let triangle = function(side1, side2, side3){
     let x = (side1 + side2 + side3)/2;
     let y = Math.sqrt(x*(x-side1)*(x-side2)*(x-side3));
     return y;
 }
 
 triangle(5,6,7);
