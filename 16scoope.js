// ********************** Closure Scope **********************

function one() {
  const username = "kaif";

  function two() {
    const website = "bytebuster";
    console.log(username);
  }
  two(); // twp() -> call the function two() to be execute
}
// one(); // one() -> call the function one() to be execute
// if we not call function one the code will not give any output

// *******************************************

if (true) {
  const username = "kaif";
  if (username === "kaif") {
    const website = " bytebuster";
    console.log(username + website);
  }
  //   console.log(website);  -> gives us error because website exist in local scope and we access it out of the their block
}
// console.log(username); -> it also give the error because of the scope
