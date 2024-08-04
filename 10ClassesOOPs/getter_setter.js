class User {
    f;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return `${this._email} is the email`;
    }

    set email(value) {
        return this._email = value ;
    }

    get password() {
        return `${this._password} is the password`;
    }

    set password(value) {
        this._password = value;
    }
}

const hitesh = new User("hitesh@hitesh.ai", "password");
console.log(hitesh.email);
