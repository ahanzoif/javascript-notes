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
console.log(anotherStringOne.trim())

const url = "https://kaifahan.com/md%20kaif"
console.log(url.replace('%20', ''))
console.log(url.includes('kaif'))



// To check all the string method on browser we have to create new String value then call the variable for eg
// const gameName = new String('kaif')
// type -> gameName <- in your browser and you get all string methods.
// length.
// substring. 
// etc