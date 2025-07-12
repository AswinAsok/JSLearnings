function sayHello() {
    console.log("i would like to say hello");
}

setTimeout(() => {
    sayHello();
}, 2000);

console.log("chai code");

for (let index = 0; index < 10; index++) {
    console.log(index);
}

// asynchronous => having a pause
