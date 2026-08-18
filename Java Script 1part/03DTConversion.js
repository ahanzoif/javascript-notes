// String to Number

let score = "33";   // Store the value "33" as a string.
// let score = "Kaif"
// let score = "33abc";
// let score = true;
// let score = null;
// let score = undefined;

console.log(typeof score);   // Check the data type
// console.log(typeof(score));  // Another way to check data type

let valueInNumer = Number(score);   // Convert String into a Number

console.log(typeof valueInNumer);   // Verify the data type after conversion
console.log(valueInNumer);          // Display the converted value

// Data Type Conversion
// "33" -> 33
// "33abc" -> NaN (Not a Number)
// true -> 1; false -> 0

let isLoggedIn = 0
let booleanisLoggedIn = Boolean(isLoggedIn);

console.log(booleanisLoggedIn);
console.log(typeof booleanisLoggedIn);


// Number to String

let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);