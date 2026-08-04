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