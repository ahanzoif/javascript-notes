const instagramUser = new Object()  // Singleton Object
instagramUser.id = "346hah#"
instagramUser.name = "Kaif"
instagramUser.isLoggedIn = false
// console.log(instagramUser);

const snapchatUser = {
    email: "unknown@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Md",
            secondname: "Kaif"
        }
    }
}
console.log(snapchatUser.fullname.userFullname.secondname)
//To access object in object we use .(dot) notation.
//In JS nested of objects are possible.