//primitive

// Definition: These are the most basic data types that are directly provided by the programming language. They store simple values and are not objects.
// Characteristics:
// Stored directly in memory (faster access).
// Immutable (their value cannot be changed directly).
// Usually require less memory.

//7 types :String ,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3
//float,int,double etc all are comimg in Number

const isLoggedIn = false
const outsideTemp = null
console.log(typeof isLoggedIn);// boolean
console.log(typeof outsideTemp);//object
let userEmail;//undefined

// const id = symbol('123')
// const anotherid = symbol('123')
// symbol is used for unique
// console.log(id === anotherid); //not equal

const bigNumber = 3456543576654356754n
console.log(bigNumber);

// Refrence (Non Primitive)
// Definition: These are more complex data types that are built from primitive types. They can store multiple values and are often objects.
// Characteristics:
// Stored as references (the actual data is stored elsewhere in memory).
// Mutable (their contents can be modified).
// Typically require more memory.

//Array,Object,Function
const heros = ["shaktiman","ironman","drstsange"]
console.log(heros);
console.log(typeof heros);

let myObj = {
    name: "Manan",
    age: 22,
}
console.log(myObj);
console.log(typeof myObj);
//  both have object type
const mrFunction = function(){
    console.log("Hello World");
}
mrFunction();//Hello World
console.log(mrFunction);
console.log(typeof mrFunction);//object function

