const user = {
    username: "Md Kaif",
    department: "CSE",

    welcomeMessage: function() {
        console.log(`Hey, ${this.username} Welcome to my profile`);
        // console.log(this);    
    }
}
user.welcomeMessage()
user.username = "Ahan"
user.welcomeMessage()
console.log(this);
// it gives empty{} because there is no global variable to refer or context of the -this-

// *********************** Notes ***********************

// -this.- refers to the context of the user

// In function (this) is Dynamic but in Arrow function (this) is Lexical

// You have to define Global variable to use (this) in Arrow Function

function check () {
    let username = "Ashiya"
    console.log(this.username);
}
check()
// this works in object not in a function

const syntax = () => {
    let name = "kaif"       //Arrow Function Syntax
    console.log(name);
}

// Normal Function
// Has its own this.
// this depends on how the function is called.

// Arrow Function
// Does not have its own this.
// Uses (borrows) the this from its parent (outer scope).
// Arrow functions do not have their own this; they inherit this from the surrounding scope.