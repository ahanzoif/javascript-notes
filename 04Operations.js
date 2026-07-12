// Operations

let value = 3;
let negValue = -value; // Unary minus (-) reverses the sign of a number.(sign reverse kr deta hai)
console.log(negValue);

let fox = -3;
let posFox = +fox; // Unary plus (+) converts a value to a Number. like ("33" -> 33, string -> number)
console.log(posFox); // If the value is already a number, it does nothing.

// To get the absolute (always positive) value, use Math.abs().
// abs = Absolute Value

let thing = -9;
console.log(Math.abs(thing));

let str1 = "Hello ";
let str2 = "Kaif";
let str3 = str1 + str2; // + acts as a concatenation operator for strings.
console.log(str3);
