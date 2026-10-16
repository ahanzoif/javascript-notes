// *******************************
// Object literal
const user = {
  username: "kaif",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from DB")
    // console.log(`username: ${this.username}`)
    // console.log(this)
  },
};

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// ****************************************************

// Constructor Function

// const promiseOne = new Promise()
// const date = new Date()
// new keyword is constructor function
// it allow that hum ek object literal se multiple instance bana skte hai

// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;

//     return this;
// }

// const userOne = User("kaif", 12, true)
// const userTwo = User("ahan", 11, false)
// console.log(userOne);

// yaha pe humne constructor function (new) nhi lagya isliye value override ho rhi hai

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  //this. ka use current context ke liye use kr rhe hai.
  return this;
}

const userOne = new User("kaif", 12, true);
const userTwo = new User("ahan", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);

// constructor property khud ka reference hoti hai

// new keyword use krne se ek hi object ka new instance milta hai mtlb hum kitni v copy bna skte hai original pe frk nhi parega....

// *******************************************************

// Working of new keyword
// 1. when we use new keyword a empty object is created that is called instance
// 2. Constructor function is called through new keyword, combine all arguments and return to user.
// 3. arguments are inject in new keyword
// 4. function ke andar mil jate hai.