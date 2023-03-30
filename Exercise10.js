//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

let no1 = parseInt(prompt("Enter first no : "));
let no2 = parseInt(prompt("Enter second no : "));

if(no1 === no2){
    let tt = 3 * (no1+no2);
    console.log("Your triple sum is : " + tt);
}else{
    let sum = no1+no2;
    console.log("Your sum of two numbers is : " + sum);
}
