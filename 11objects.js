// Object.create -> Constructor Method (Singleton)
//Object.create is another way to create objects in JavaScript.

//Object Literals

// Object Stands for key-value pairs

const mySym = Symbol("key1"); // syntax of Symbol declration
//A Symbol is a unique data type in JavaScript.

const JSuser = {
  name: "kaif",
  //key   //value

  age: 22,
  [mySym]: "mykey1", // this is the syntax of symbol to declare in any Object

  "full name": "Md Kaif",
  location: "Hajipur",
  email: "kaif@google.com",
  isLoogedIn: false,
  lastLoginDays: ["Friday", "Saturday"],
}; // -> this is the syntax to declare any object in JS

// console.log(JSuser)

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);

JSuser.email = "kaif@bytebuster.com";
// Object.freeze(JSuser);
// Object.freeze() makes the object immutable.
// That means you cannot:
// Add new properties
// Update existing properties
// Delete properties

JSuser.email = "kaif@microsoft.com";
//This line will not change the value because the object has already been frozen.
// console.log(JSuser);

JSuser.greeting = function() //Adding a Function to an Object
{
    console.log("Hello Kaif")
}

JSuser.greetingTwo = function()
{
    console.log(`Hello JS User, ${this["full name"]}`)
}

console.log(JSuser.greeting())
console.log(JSuser.greetingTwo())

//Inside an object's method, this refers to the object
// that called the method, allowing you to access its properties 
// and other methods using this.property or this.method().