//ES 6 kei badh

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}ENY`;
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const chai = new User("Chai", "chai@gmail.com", 123);

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, password, email) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}ENY`;
};

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
};

const Tea = new User("Chai", "chai@gmail.com", 123);

console.log(Tea.encryptPassword());
console.log(Tea.changeUsername());
