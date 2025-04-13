const coding  = ["js","ruby","java","python","cpp"]
// callback functio n do not have name
coding.forEach(function (val){
    console.log(val);
    
})

coding.forEach( (item) =>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item ,index,arr)=>{
console.log(item,index,arr);

})

const myCodeing = [
    {
        languageName : "javascript",
        languageFileName:"js"
    },
    {
        languageName : "java",
        languageFileName:"java"
    },
    {
        languageName : "python",
        languageFileName:"py"
    }
]
myCodeing.forEach( function(val){
    console.log(val.languageFileName);
    
} )