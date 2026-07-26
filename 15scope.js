// *********************Local & Global Scope *********************

// var c = 300
// let a = 300;
const b = 60;

if (true) {
  let a = 10;
  const b = 20;
  // var c = 40
  console.log(
    "Hey, I'm Local Scope",
    b,
    "I only use in my block, out of my block you never access me",
  );
}

// console.log("Outer a: ", a);
console.log(
  "Hey there!",
  "I'm",
  b,
  "and I'm Global Scope, we can use me any block of code.",
);

// console.log("Var c: ", c);

// ********************* Important *********************

// Why do we not use var for scope, because var has function scope,
// while let and const have block scope.

// A block is anything inside { }.
