const instagramUser = new Object(); // Singleton Object
instagramUser.id = "346hah#";
instagramUser.name = "Kaif";
instagramUser.isLoggedIn = false;
// console.log(instagramUser);

const snapchatUser = {
  email: "unknown@gmail.com",
  fullname: {
    userFullname: {
      firstname: "Md",
      secondname: "Kaif",
    },
  },
};
// console.log(snapchatUser.fullname.userFullname.secondname)
//To access object in object we use .(dot) notation.
//In JS nested of objects are possible.

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2)
//.assign operator is use to assign (add) two or more values in one.

const obj3 = { ...obj1, ...obj2 };
//spread operator for Object use to add all values in one.
//maximum time we use spread to add more objects
console.log(obj3);

const users = [
  {
    id: 1,
    email: "k@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
  {
    id: 1,
    email: "k@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
];
//Object in Array
//In Array we can insert nested objects

console.log(Object.keys(instagramUser));
//this syntax is use to get all the keys of Object and add in Array.

console.log(Object.values(instagramUser));

console.log(Object.entries(instagramUser));
//.entries is use to get keys and values
//the first output is key and second one is value.

console.log(instagramUser.hasOwnProperty('name'))
// .hasOwnProperty is use to check the objects property