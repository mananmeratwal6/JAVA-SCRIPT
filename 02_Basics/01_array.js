//array in JS cam store different types of datatypes
const myArr = [1,2,3,4,5]
console.log(myArr);

const myheros =["ironman","thor","drStrang"]
console.log(myheros);

const myArr2 = new Array(1,2,3,4,5,4,5,6)
console.log(myArr2);

//array Methods
// myArr.push(6);
// myArr.pop()

//it add or remove values to front
// myArr.unshift(7)
// myArr.shift();

console.log(myArr.includes(2))
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(typeof newArr);

//slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3);//it not include range
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);

console.log(myn2);
