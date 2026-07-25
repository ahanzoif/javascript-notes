//Object Destructuring and JSON API

const Collegeprofile = {
    studentName: "Md Kaif",
    course: "B.Tech",
    department: "CSE",
    year: "3"
}

const { studentName } = Collegeprofile
console.log(studentName);

const { studentName: name } = Collegeprofile;
console.log(name);
//this syntax is used to short the name of variables. 


