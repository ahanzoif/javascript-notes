// *********************Local & Global Scope *********************

// var c = 300
// let a = 300;
const b = 60;

if (true) {
  let a = 10;
  const b = 20;
  // var c = 40
  console.log(
    "Hi! I'm Local Scope",
    b,
    "I live only inside this block,  You cannot access me outside of it.",
  );
}

// console.log("Outer a: ", a);
console.log(
  "Hello!",
  "I'm Global Scope",
  b,
  "You can access me from anywhere in the program.",
);

// console.log("Var c: ", c);

// ********************* Important *********************

// Why do we not use var for scope, because var has function scope,
// while let and const have block scope.

// A block is anything inside { }.



