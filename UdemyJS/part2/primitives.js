let balance = 120;
let anotherBalance = new Number(10);

console.log(balance);
// console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

//boolean

let isActive = false;
let isReallyActive = new Boolean(true);

console.log(typeof isActive);
console.log(typeof isReallyActive);

//null and undefined

let firstName;
console.log(firstName);

//string

let myString = "hello";
let myStringOne = "Hola";

let userName = "hitesh";

let greetMessage = `Hello`;
let oldGreet = myString;

let sm1 = Symbol("AWS");
console.log(sm1);
let sm2 = Symbol("AWS");
console.log(sm2);

console.log(sm1 == sm2);
