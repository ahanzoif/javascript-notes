function setUserName(username) {
  this.username = username;
}

function creatUser(username, email, password) {
  setUserName.call(this, username);
  // paranthesis wali this ka kaam function ka refrence context lane ka kaam hai kyun ki wo function execute hone ke baad execution context se nikl jata hai.
  this.email = email;
  this.password = password;
}

const byte = new creatUser("bytebuster", "bytebuster@gmail.com", "7070");
console.log(byte);

// we use (this) for current context (refrence)
// .call is used to hold the refrence of the function,object.
