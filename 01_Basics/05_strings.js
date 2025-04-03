const name = "Manan"
const repocount = 50
console.log(name + repocount + "Meratwal");
console.log(name.length);


//most widely used is backticks ``
// adv of used these is string interpulation in these we make placeholders where we can insert any variables amd we can method also in these like
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Manan-Mr-con')
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(2,-3);
console.log(anotherString);

const newOne = "    manan    "
console.log(newOne);
console.log(newOne.trim());

const url = "https://manan.com/manan%20meratwal"
console.log(url.replace('%20', '-'));
console.log(url.includes('manan'));

console.log(gameName.split('-'));
