class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    // return this._password.toUpperCase();
    return `${this._password}kaif`;
  }

  set password(value) {
    this._password = value;
  }
}

const kaif = new User("kaif@byte.ai", "ashiya");
console.log(kaif.password);
console.log(kaif.email);
