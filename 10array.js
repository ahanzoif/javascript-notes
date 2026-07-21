const marvel = ["Tony Stark", "Iron Man", "Doctor Doom"];
const dc = ["Batman", "Superman", "Wonder Woman"];

// marvel.push(dc)      //From line 4 to 6 is not good practice to
// console.log(marvel)  //write the good and readable form of code
// console.log(marvel[3][2])

const comics = marvel.concat(dc); // concat operator
//.conca -> Combines two or more arrays.
// This method returns a new array without modifying any existing arrays.
console.log(comics);

const heros = [...marvel, ...dc]; // spread operator
console.log(heros);
//Spread operator(...), this operator is one of the most
//commonly used features in moder JS, insted of concat operator
//The ... takes each element out of the array and places it into the new array.

const nums = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const Allnums = nums.flat(Infinity);
console.log(Allnums);
//.flat -> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//Infinity -> The maximum recursion depth.
//Depth -> Arrays in Array.

console.log(Array.isArray("Kaif"));
//Checks whether a value is an array or not.

console.log(Array.from("Kaif"));
//Creates a new array from an iterable or array-like object.

console.log(Array.from({ name: "Kaif" }));
//Plain objects are neither iterable nor array-like, so nothing is copied.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
//.of -> Returns a new array from a set of elements.
