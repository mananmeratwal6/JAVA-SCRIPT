
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

