const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    },
};

// user.welcomeMessage();
// user.username = "Aswin";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "aswin";
//     console.log(this);
// }

// chai();

// const chai = function () {
//     let username = "aswin";
//     console.log(this.username);
// };

const chai = () => {
    let username = "aswin";
    console.log(this);
};

chai();

// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({
    username: "aswin",
});
console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 6, 3];

// myArray.forEach(() => ())
