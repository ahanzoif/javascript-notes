// Object.create -> Constructor Method (Singleton)

//Object Literals 

const mySym = Symbol("key1")

const JSuser = {
    name:  "kaif",
    age:  22,
    [mySym]: "mykey1",
    "full name": "Md Kaif",
    location: "Hajipur",
    email: "kaif@google.com",
    isLoogedIn: false,
    lastLoginDays: ["Friday", "Saturday"]
} // -> object

console.log(JSuser)