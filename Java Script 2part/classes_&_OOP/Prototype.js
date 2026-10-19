// let myName = "kaif    "
// console.log(myName.length)

let marvelHeros = ["hulk", "gambit"]

let herosPower = {
    hulk: "smash",
    gambit: "magic",

    getHulkPower: function(){
        // console.log(`Hulk power is ${this.hulk}`)
    }
}

Object.prototype.kaif = function() {
    // console.log(`kaif is present in all objects`)
}

Array.prototype.heykaif = function() {
    // console.log(`Kaif says hello`)
}
// herosPower.kaif()
marvelHeros.kaif() 
marvelHeros.heykaif()
// herosPower.heykaif()


// **********************************************

// Inheritance

const User = {
    name: "byte buster",
    email: "bytebuster@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport 
}

Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) 

let anotherUserName = "KaifandAshiya         "
String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"AshiyaKaif   ".trueLength()
"Dolly".trueLength()
"Nisha".trueLength()