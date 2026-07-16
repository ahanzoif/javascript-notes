const name = "Kaif"
const repo = 9

// console.log(name + repo + " value")  
// In modern JS this method of add 2 string is not use

console.log(`Hello my name is Md ${name} and my github repo count is ${repo}`)

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
console.log(gameName) 
console.log(gameName[2])

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf("b"))