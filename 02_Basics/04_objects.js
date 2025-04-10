const tinderuser = new Object()//Singleton object in which we can store values
const tinderUser = {}

tinderUser.id = "101"
tinderUser.name = "Sammay"
tinderUser.isLogedIn = false
console.log(tinderUser);


const regularUser = {
    email:"manan@google.com",
    fullname:{
        userfullname:{
            firstname:"Manan",
            lastname:"Meratwal"
        }
    }
}
console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = {obj1, obj2}//wrong approach

// const obj4 = Object.assign({},obj1,obj2,obj3) target and source 
const obj4 = {...obj1,...obj2}
console.log(obj4);

const users = [
    {
        id : 1,
        email:"Man@gmail.com"
    },
    {
        id : 1,
        email:"Man@gmail.com"
    },
    {
        id : 1,
        email:"Man@gmail.com"
    },
]
users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));// as it returns array so it is very usefull to use in database and other things
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//convert all keys and values in array into array
console.log(tinderUser.hasOwnProperty('isLogedIn') );




