//Immediately Invoked Function Expression(IIFE)
//used when global scope k pollution se problem hoti h to jo global scope k variable h pollution h to unko hatane k liye use hota h

(function chai(){
    //name iife
    console.log(`DB connected`);
    
})();//use ; to end iife
( ()=>{//unamed iife
    console.log(`DB Connected two`);
    
})();
( (name)=>{
    console.log(`DB Connected two ${name}`);
    
})('Manan');