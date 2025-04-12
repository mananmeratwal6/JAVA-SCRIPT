//this keyword is to indicate current context like within braces jitne bhi variable h isme to unko access karne k liye this lga sakte h
const user = {
    username: "manan",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);//this jo bhi current context h or uske under jo username h uski value print kar rha h
        console.log(this);
        
    }
}
user.welcomemessage()
user.username="sam"//or inder apan usernaem ki value change kar rhe h context means value
user.welcomemessage()
console.log(this)//empty
// browser k under window object


// function chai(){
//     let username = "manan"
//     console.log(this.username);//undefined this is not working in function
// }
// chai()
// const chai =function(){
//          let username = "manan"
//          console.log(this); //same undefine
// }
// chai()


//++++++++++Arrow++++++++++++
const chai =()=>{
         let username = "manan"
         console.log(this.username); 
         //undefined 
         console.log(this);//empty
}
chai()

// const addtwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(2,5));

//++++Implicit++++
// const addtwo =(num1,num2)=> num1+num2

// const addtwo =(num1,num2)=> (num1+num2)

const addtwo =(num1,num2)=> ({username:"Manan"})//object return

console.log(addtwo(2,5));
//agar curly braces use kiya to return likhna padega or agar parenthesis use kiya to nhi likhna padta

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()