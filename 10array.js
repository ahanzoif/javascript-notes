const marvel = ["Tony Stark", "Iron Man", "Doctor Doom"]
const dc = ["Batman", "Superman", "Wonder Woman"]

// marvel.push(dc)      //From line 4 to 6 is not good practice to
// console.log(marvel)  //write the good and readable form of code
// console.log(marvel[3][2])

const comics = marvel.concat(dc)
//.conca -> Combines two or more arrays. 
// This method returns a new array without modifying any existing arrays.
// console.log(comics)

const heros = [...marvel, ...dc]
console.log(heros)
//Spread operator(...), this operator is one of the most
//commonly used features in moder JS, insted of concat operator
//The ... takes each element out of the array and places it into the new array.