 //for of
 //["","",""]
 //[{},{},{}]
 const arr=[1,2,3,4]
          //var declare  kis p loop lagana chahte h
 for(const num of arr){
    console.log(num);
 }

 const greetingw = "hello world"
 for(const greet of greetingw){
    console.log(`each char is ${greet}`);
    
 }


 //Maps is pbject and store only unique values
 const map = new Map()// map are not iterable so we can not apply for in loop
 map.set('IN',"India")
 map.set('USA',"UNited state of america")
 map.set('fr',"France")
 console.log(map);
      //destructing
//  for( const [key,value] of map){
//     console.log(key,':-',value);
//  }

 const myObject ={
    game1:"nfs",
    game2 :"spiderman"
 }
 
 for( const [key,value] of myObject){//not applid on object
    console.log(key,':-',value);
 }