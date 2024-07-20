//Dates
let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(typeof(myDate));
console.log("***************");
let myCreated=new Date(2024,12,13)
console.log(myCreated.toLocaleDateString());
console.log(myCreated.toString());
console.log(myCreated.toDateString());
let Another=new Date("2024-01-20")
console.log(Another.toDateString());
let myTimeStap=Date.now();
// console.log(myCreated.getTime());
console.log(Math.round(Date.now()/1000));// converting date into seconds
console.log(myCreated.getDate());
console.log(myCreated.getHours());
