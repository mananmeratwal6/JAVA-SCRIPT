for(let i=0;i<=10;i++){
    const element = i;
    if(element==5){
        console.log("5 is best no");
        
    }
    console.log(element);
    
}
for(let i=0;i<10;i++){
    // console.log(`outer loop${i}`);
    
    for(let j=0;j<10;j++){
        // console.log(`innner loop${j} outer loop${i}`);
        console.log(i+'*'+j+'='+i*j);
        
    }
}

let myArray =["flash","batman","superman"]
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
    
}
for(let i=0;i<20;i++){
    if(i==5){
        console.log(" 5 is detected");
        break
    }
    console.log(`value of  is ${i}`);
    
}
for(let i=0;i<20;i++){
    if(i==5){
        console.log(" 5 is detected");
        continue
    }
    console.log(`value of  is ${i}`);
    
}