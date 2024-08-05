const name = "aswinasok";
const repoCount = 50;

// console.log(`Hello My Name is ${name} and I have ${repoCount} repositories`);

const gameName = new String("Hitesh-HC-aswinasok");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-9, 4);
console.log(anotherString);

const newStringOne = "  asd a a  \n   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aswinasok.com/asd%20sdd";

console.log(url.replace("%20", "-"));
console.log(url.includes("asw2in"));

console.log(gameName.split('-'))