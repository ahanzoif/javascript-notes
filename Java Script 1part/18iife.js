// IIFE -> Immediately Invoked Function Expressions

const x = 20;
(function () {
  let x = 10;
  console.log(x);
})();
console.log(x);

(function () {
    let hp = 20;
})();

// let result = hidden;


// IIFE is a function that is created and executed immediately. 
// IIFE is used to execute code immediately.

// first () is function expressions 
// second () is use to immediately invokes it.


(function nerd(){
    console.log(`named IIFE`);
})();

( () => {
    console.log(`un-named IIFE`);
})();

( (silver) => {
    console.log(`parameters pass, ${silver}`);
})(`IIFE`)

// Always add semicolumn to end Invoked