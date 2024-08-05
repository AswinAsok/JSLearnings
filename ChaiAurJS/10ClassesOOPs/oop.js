const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log(`Username: ${this.username}`);
    },
};

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("Aswin Asok", 12, false);
const userTwo = new User("Hitesh", 12, false);

console.log(userOne);
console.log(userTwo);
