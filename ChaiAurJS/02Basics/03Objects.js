//singleton

//object literals
// Object.create  constructor method

const mySym = Symbol("key1");

const JsUser = {
    name: "Aswin",
    "full name": "Hitesh Chouday",
    age: 18,
    [mySym]: "mykey1",
    location: "Kerala",
    email: "aswin@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]); //squarenotation
// console.log(JsUser[mySym]);

// Object.freeze(JsUser);
JsUser.email = "newamil@gamil.com";

// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JsUser");
};

JsUser.greetingTwo = function () {
    console.log(`Hello Js user ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
