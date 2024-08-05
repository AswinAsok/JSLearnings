// for of array specific loops

// ["", "", ""];
// [{}, {}, {}];

// const arr = [1, 2, 3, 4, 5];
// for (const value of arr) {
//     console.log(value);
// }

// const greetings = "hello world!";
// for (const greet of greetings) {
//     console.log(`Each Character is ${greet}`);
// }

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
    console.log(key, value);
}

const myObject = {
    game1: "NFS",
    game2: "Spiderman",
    game3: "Batman",
};

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}


