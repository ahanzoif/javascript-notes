class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const byte = new Teacher("Kaif", "byte@gmail.com", "7070");
byte.addCourse();

const buster = new User("bytebuster");
buster.logMe();

// console.log(byte === buster);
console.log(byte instanceof User);
