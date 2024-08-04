const User = {
    _email: "aswinasokofficial@gmail.com",
    _password: "password",

    get email() {
        return `${this._email} is the email`;
    },

    set email(value) {
        this._email = value;
    }
}