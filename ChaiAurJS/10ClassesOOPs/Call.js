function SetUsername(username) {
    //Complex DB Calls
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("Chai", "chai@fb.com", "123");

console.log(chai);
