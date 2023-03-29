//Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 

let input_1 = parseInt(prompt("Enter your first value :  "));
let input_2 = parseInt(prompt("Enter second value : "));
let opt = parseInt(prompt("Select 1 for * and 2 for / : "));


    if(opt === 1){
       let result = input_1 * input_2;
       console.log("Your ans is : " + result);
    } else if(opt === 2){
        let result_2 =  input_1 / input_2;
        console.log("Your ans is : " + result_2);
    }else{
        console.log("Enter a valid opteration :(");
    }
