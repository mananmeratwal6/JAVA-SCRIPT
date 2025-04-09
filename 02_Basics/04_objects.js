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