 // Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
 
   let year = prompt("Enter an year : ");

  if(year % 4 == 0){
      console.log(year + " is a leap year")
  }else{
      console.log(year + " is not a leap year")
  }
