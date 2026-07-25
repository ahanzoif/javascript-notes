function xyz() {}
// this is the syntax to declare function
//xyz is function name,variable.
//() in parenthesis our parameters are store.
//{} in curly braces, we write the code.

function name() {
  console.log("K");
  console.log("A");
  console.log("I");
  console.log("F");
}
name();

// *******************************************

function sumOftwo(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result = sumOftwo(4, 6);
console.log("Result is: ", result);

// *******************************************

function userMsg(userName) {
  if (!userName) {
    console.log("Please enter a valid username");
    return;
  }
  return `${userName} just logged in`;
}
console.log(userMsg("Md Kaif"));
//with attributes

console.log(userMsg(""));
//without attributes
