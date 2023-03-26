//Write a JavaScript program to get the current date.  Go to the editor
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let date = new Date();
let mm = date.getMonth();
let dd = date.getDate();
let yy = date.getFullYear();

if(mm <= 10){
    mm = "0" + mm;
    mm++;
}

if(dd <= 10){
    dd = "0" + dd;
}

console.log(mm + "-" + dd + "-" + yy);
console.log(mm + "/" + dd + "/" + yy);
console.log(dd + "/" + mm + "/" + yy);
console.log(dd + "/" + mm + "/" + yy);
