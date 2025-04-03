//Dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreateDate = new Date(2023,0,23,6,4)
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());
let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());//give time in milisecond
console.log(Math.floor(Date.now()/1000));//give time in second and remove points

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(`${newDate.getDay()}`);

newDate.toLocaleString('default',{
    weekday:"long",
    
})// ctrl+space
