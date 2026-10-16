const user = {
    username: "kaif",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from DB")
        // console.log(`username: ${this.username}`)
        // console.log(this)
    }
}

console.log(user.username)   
// console.log(user.getUserDetails()) 
console.log(this)  