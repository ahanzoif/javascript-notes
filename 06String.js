const name = "Kaif"
const repo = 9

// console.log(name + repo + " value")  
// In modern JS this method of add 2 string is not use

console.log(`Hello my name is Md ${name} and my github repo count is ${repo}`)

// *********************** Notes ***********************

// This line prints a message on the console using a Template Literal.
// A Template Literal is a modern way to create strings in JavaScript.
// It uses backticks ( ) instead of single (') or double (") quotes.

// ` ` → Backticks
// ${} → Used to insert variables or expressions into a string.

// Template Literal is introduced in ES6 (ECMAScript 2015).
// It uses backticks ( ).
// ${} is used to insert variables or expressions into a string.
// It is more readable than using the + operator for string concatenation.



const gameName = new String(`kaifbyte.com`)

// *********************** Notes ***********************

// new String() → Creates a String Object.
// "kaifbyte.com" → The string value stored inside the object.

// Why use new String()?
// A String object provides built-in properties and methods such as:
// gameName.length
// gameName.toUpperCase()
// gameName.charAt(2)
// gameName.indexOf("b")

console.log(gameName) 
console.log(gameName[2])

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf("b"))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-10, 4)
console.log(anotherString)

const anotherStringOne = "  kaif    "
console.log(anotherStringOne)
console.log(anotherStringOne.trim())  // removes extra white spaces.

const url = "https://kaifahan.com/md%20kaif"
console.log(url.replace('%20', ''))
console.log(url.includes('kaif'))

// ************** Important **************

// To explore all String methods in the browser console,
// create a String object using the `new String()` constructor.

// Example:
const gameName = new String("kaif");

// Now type:
// gameName
// in the browser console and expand the object.
// You'll see all the available String properties and methods.

// Common String methods:
// gameName.length
// gameName.substring()
// gameName.slice()
// gameName.toUpperCase()
// gameName.toLowerCase()
// gameName.charAt()
// gameName.indexOf()
// gameName.includes()
// gameName.replace()
// gameName.split()


const instagramUser = new Object(); // Singleton Object
instagramUser.id = "346hah#";
instagramUser.name = "Kaif";
instagramUser.isLoggedIn = false;
// console.log(instagramUser);

const snapchatUser = {
  email: "unknown@gmail.com",
  fullname: {
    userFullname: {
      firstname: "Md",
      secondname: "Kaif",
    },
  },
};
// console.log(snapchatUser.fullname.userFullname.secondname)
//To access object in object we use .(dot) notation.
//In JS nested of objects are possible.

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2)
//.assign operator is use to assign (add) two or more values in one.

const obj3 = { ...obj1, ...obj2 };
//spread operator for Object use to add all values in one.
//maximum time we use spread to add more objects
console.log(obj3);

const users = [
  {
    id: 1,
    email: "k@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
  {
    id: 1,
    email: "k@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
];
//Object in Array
//In Array we can insert nested objects

console.log(Object.keys(instagramUser));
//this syntax is use to get all the keys of Object and add in Array.

console.log(Object.values(instagramUser));

console.log(Object.entries(instagramUser));
//.entries is use to get keys and values
//the first output is key and second one is value.

console.log(instagramUser.hasOwnProperty('name'))
// .hasOwnProperty is use to check the objects property