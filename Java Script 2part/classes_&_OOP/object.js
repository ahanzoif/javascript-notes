function additionOf6(num) {
    return num+6
}

additionOf6.power = 2
console.log(additionOf6(6))
console.log(additionOf6.power)
console.log(additionOf6.prototype)

function creatUser(username, score) {
    this.username = username
    this.score = score
}

creatUser.prototype.increment = function(){
    this.score++
}

creatUser.prototype.printMe= function() {
    console.log(`score is ${this.score}`)
}

const byte = new creatUser("byte", 130)
const buster = new creatUser("buster", 500)

buster.printMe()      