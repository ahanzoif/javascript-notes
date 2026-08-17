const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumbers.map( (num) => {return num + 10} )
// console.log(newNums);

// in this code map convert array element with new array element and return new array
// example return num (1) + 10 => 11 and so on

const nerd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const power = nerd
            .map( (num) => num * 10 )
            .map( (num) => num + 1  )
            .filter( (num) => num > 40 )
console.log(power);
//in this block of code we chaining the map