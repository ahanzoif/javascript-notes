//*********************** Important points for Array in JS ***********************

// JS arrays are Dynamic, You don't need to specify the size.
// Unlike other languages. like C++,Java etc...

// JS arrays can store different data types together.
// Usually other language store one data type.
//One array stores
// Number
// String
// Boolean
// Null
// Object
// Another Array

// Arrays in JavaScript are actually a special kind of object.
// Because of this they have lots of built-in methods.

const myArray = [0, 2, 4, 5, 6, 8];
console.log(myArray[3]);
console.log(typeof myArray);

const marvel = ["Iron Man", "Doctor Doom"];
console.log(marvel);
console.log(typeof marvel);

const array1 = new Array(1, 3, 5, 6);
console.log(array1);
console.log(typeof array1);

//********************* Array Methods *********************

myArray.push(9);
myArray.push(7);
myArray.pop();

myArray.unshift(3);
myArray.shift();

console.log(myArray.includes(2));
//.includes tells value is true or false on the basics of original value
console.log(myArray.indexOf(2));
console.log(myArray);

const newArray = myArray.join();
//join() joins all elements of an array into a single string, and return String.

console.log(typeof newArray);
console.log(newArray);

//********************* Array's Slice and Splice *********************

console.log("A", myArray);

const myNewArray = myArray.slice(1, 3);
// Slice returns portion of the array without changing the original array value.
console.log(myNewArray);

console.log("B", myArray);

const myNewArray2 = myArray.splice(1, 3);
// Splice changes the original value, It can:
// Remove elements, Add elements, Replace elements.
console.log(myNewArray2);

console.log("C", myArray);
