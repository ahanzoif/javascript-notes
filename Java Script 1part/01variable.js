const accountId = "23467"
// In JS const means once the value decalre there is no changes. (unique)

// accountId = "2"  if we declare something like this it means it show error because const is single or unique value.

let accountEmail = "kaif@google.com" 
// we use let to declare our variable in JS

var accountPassword = "56743"
// var is also use to declare variable but we generally not use var because of scope problem

accountCity = "Lucknow"
// if we not declare any variable for accountCity, so then JS automatically create the global variable.

let accountStatus;
// it means we resered the variable name but not declare anything.

accountEmail = "kaif@microsoft@gmail.com"
// it means node js read the code line by line and i already decalre a variable name called let accountEmail so insted of create new variable it replace the values.

accountPassword = "73648"
// same as previous statement.

accountCity = "Hajipur"
// same as previous statement.

console.log("accountEmail")
// This syntax print the output.

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus])
// use this table for print multiple console at same time.

// In JavaScript, semicolon (;) is often optional because JavaScript has a feature called Automatic Semicolon Insertion (ASI).

// It means both work