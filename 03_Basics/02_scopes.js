let a
if(true){
    let a =10;
    const b =20
    var c=30
    console.log("Inner ",a)
    
}
// console.log(a);
// console.log(b);//both scope is in {} braces we can use global values in {} but values in {} cant use in outside until return
// console.log(c);

function one(){
    const username = "Manan"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);//it not execute outside as website scope is within the function two 
    two()
}
one()

if(true){
    const username = "Manan"
    if(username==="Manan"){
        const website = " youtube"
        console.log(username+website);   
    }
    // console.log(website);//error
}
// console.log(username);//error


//+++++++++++++++++++++++++Interesting++++++++++++++

console.log(addone(5));

function addone(num){
     return num+1
}

console.log(addtwo(2));//error
const addtwo = function(num){
    return num+2;
}