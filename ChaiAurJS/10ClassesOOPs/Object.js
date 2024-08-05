// function multipleBy5(num) {
//     return num * 5;
// }

// multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username) {
    this.username = username;
}

createUser.prototype.captialze = function () {
    console.log(`Capitalized Username is:  ${this.username.toUpperCase()}`);
};

createUser.prototype.printUsername = () => {
    this.username = "Block"
    console.log(`OG Username is: ${this.username}`);
};

const userOne = new createUser("Aswin");

userOne.captialze();
userOne.printUsername();
