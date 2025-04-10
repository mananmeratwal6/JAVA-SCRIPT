
 //sysntax function function_name(){function defination}  function_call

function sayMyName(){
    console.log("M");
    console.log("N");
    console.log("A");
    console.log("A");
    console.log("N");
}
sayMyName();

function addTwoNumber(number1,number2){//no need to give type og parameter
    console.log(number1+number2);//if not a number then it goes on type conversion
    
}
addTwoNumber(2,5);

function addTwoNumber(number1,number2){ 
// let result = number1+number2
// return result
    return number1+number2
}
const result = addTwoNumber(2,5);
console.log(result);

function loginUserMessage(username="Man"){
    if(username===undefined){//undfined means false and we can use if(!username)
        console.log("enter a username");
        return
    }
    return `${username} just log In`
}
// console.log(loginUserMessage("Manan"));
console.log(loginUserMessage());//undefined

// function calculateCartPrice(...num1){//... is rest operator combine all value in one or array
//     return num1
// }
// console.log(calculateCartPrice(100,200,500,232));
function calculateCartPrice(valu1,valu2,...num1){//in these first two values goes in val1 and val2
    return num1
}
console.log(calculateCartPrice(100,200,500,232));

const user = {
    username :"Manan",
    price :199 //if prices then it gives undefined  
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)


const myNewArray = [100,2003,300,505]

function returnSecondValue(anyArray){
    console.log(`sec value is ${anyArray[2]}`);
    
}
returnSecondValue(myNewArray)