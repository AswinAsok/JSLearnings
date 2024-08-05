// Primitive Datatype(Call by Value)

// 7 types : String, Number, Boolean, null => empty, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 123123123123123123123123123123123123n;

// Reference Type (Non Primitive)

// Array, Objects, Functions

const heros = ["shatkiman", "naagraj", "doga"];
let myObj = {
    name: "Aswin",
    age: 22,
};

//functionum variable ann

const myFunction = function () {
    console.log("Hello World");
};
