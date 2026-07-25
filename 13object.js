//Object Destructuring and JSON API

//Destructuring is a shorter way to extract values from an object and store them in variables.

const Collegeprofile = {
  studentName: "Md Kaif",
  course: "B.Tech",
  department: "CSE",
  year: "3",
};

console.log(Collegeprofile.studentName);
//Normally we access property like this.

//If we want to use it multiple times, we use destructuring:
const { studentName } = Collegeprofile;
console.log(studentName);

const { studentName: name } = Collegeprofile;
console.log(name);
//this syntax is used to short the name of variables.
