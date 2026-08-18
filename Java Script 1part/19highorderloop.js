// ************************ MAP ************************

// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Map is not an Object Map means Map is an object type provided by java script.

//example:- 
//const map = new Map();

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

//In Map duplicate value is not allowed

// for (const key of map) {
//     console.log("In this for of loop values print in Array format",key);
// }

//To print key and value seprately we have to add square bracket.

// for (const [key, value] of map) {
//     console.log(key, '=>', value);
// }


// ********************** forin loop **********************

// const myObject = {
//     js: "Java Script",
//     cpp:"C++",
//     rb: "Ruby",
//     swift: "Swift by apple"
// }

// for (const key in myObject) {
//    console.log(`${key} is shortcut for ${myObject[key]}`);
// }

//key is just a variable name, js does not care about what you call the variable name.

const prograLanguage = ["js", "rb", "python", "cpp", "java"]

for (const key in prograLanguage ) {
    console.log(prograLanguage[key]);
}

//to get array values in forin loop we have to write object name and its key ->(object[key])