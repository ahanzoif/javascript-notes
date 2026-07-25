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
console.log(userMsg(""));
