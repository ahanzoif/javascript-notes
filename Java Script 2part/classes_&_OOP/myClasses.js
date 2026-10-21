// the JS we use or learn after ES6 update

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const byte = new User("bytebuster", "bytebuster@gmail.com", "7070");
console.log(byte.encryptPassword());
console.log(byte.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const buster = new User("buster", "buster@gmail.com", "7070");
console.log(buster.encryptPassword());
console.log(buster.changeUsername());
