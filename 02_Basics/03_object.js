//object literals
const mySym = Symbol("key1")
const JsUser = {//In these we have keys and values 
    name:"Manan",
    "fullname":"Manan Meratwal",
    [mySym]:"mykey1",//way of using symbol
    age:18,
    location:"jaipur",
    email:"manan@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturaday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);//behind key use as string
console.log(JsUser["fullname"]);//there as no chance to acces the fullname with dot operator

console.log(JsUser[mySym]);

JsUser.email = "manan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "manan@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
