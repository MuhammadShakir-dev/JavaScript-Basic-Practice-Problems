//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//Expected Output :
//60°C is 140 °F
//45°F is 7.222222222222222°C


let temp = parseInt(prompt("Enter temprature in fahrenheit or celsius : "));
let opt = parseInt(prompt("Select 1 for celsius and 2 for fahrenheit : "));

if (opt === 1){
    let cel = (temp - 32) * 5/9;
    console.log("Your temp in Celsius is : " + cel + " deg");
}else if(opt === 2){
    let far = (temp * 9/5) + 32;
    console.log("Your temprature in fahrenheit is  : " + far);
}
