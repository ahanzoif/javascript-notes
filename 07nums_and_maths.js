// // ***************-Numbers-***************

// const score = 400
// console.log(score)

// const balance = new Number(100)
// // Creates a Number Object.

// console.log(balance)

// console.log(balance.toString().length)
// // Converting Number to String and check the string length.

// console.log(balance.toFixed(2))
// // toFixed -> fixes the number of digits after the decimal point.
// // Example:
// // current value is 100
// // toFixed(2)
// // it becomes 100.00

// // Used a lot for:
// // Prices
// // Currency
// // Percentage

// const secondNumber = 990.86598
// console.log(secondNumber.toPrecision(4))
// // toPrecision() keeps the specified number of significant digits (digits that carry meaning), not just decimal places.
// // Example:
// // 990.86598 -> 4 significant digits
// // 990.9  -> Java Script rounds the value.


// const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'))
// // toLocaleString() formats numbers according to a country's numbering system.
// // Without formating --> 1000000

// // Using Indian format
// // hundred.toLocaleString('en-IN') --> 10,00,000

// // Example:
// // 1000000.toLocaleString('en-US')
// // "1,000,000"

// // 1000000.toLocaleString('en-IN')
// // "10,00,000"

// // 123456789.toLocaleString('en-IN')
// // "12,34,56,789"



// // *************** Maths ***************

// console.log(Math);
// console.log(Math.abs(-4)) // Math.abs gives Absolute Value
// console.log(Math.round(4.3))  // Math.round conver values in round figure
// console.log(Math.ceil(4.2))  // Math.ceil is use to get higher round value
// console.log(Math.floor(4.9)) // Math.floor is use to get lower round value
// console.log(Math.min(4,3,5,2,0,1)) // Math.min is use to find min value
// console.log(Math.max(7,2,45,78,9475,47446)) // Math.max is use to find max value

// // *************** Important ***************

// console.log(Math.random())  // Math.random value always lie between 0 & 1
// console.log((Math.random()*10) + 1) // Use to  get value between 1 to 10 and avoid 0

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Here i define value 1 to 6 and i get random value between this range 