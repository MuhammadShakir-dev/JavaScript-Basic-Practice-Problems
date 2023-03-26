//Write a JavaScript program to display the current day and time in the following format.  Go to the editor
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let date = new Date();
let day = weekDays[date.getDay()];
console.log("Today is : " + day);
console.log("Current Time is : " + date.toLocaleTimeString());
