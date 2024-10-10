// maths and 
const score = 100
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString()) // string 
console.log(balance.toString().length)

const otherNumber = 1000000

console.log(otherNumber.toLocaleString())

console.log(Math.random()) // this gives value between 0 to 1
// what if we want to a random int between a range 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)