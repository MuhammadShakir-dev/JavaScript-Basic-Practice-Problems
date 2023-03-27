//8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"


let random = Math.floor(Math.random() * 10) + 1;
let userInput = parseInt(prompt("Enter a Number : "));

if(random === userInput){
    console.log("Good Luck");
}else{
    console.log("Not Matched the no was : " + random);
};
