const object = require('./module.js')
const getNumber = object.getNumber

console.log('start.js')

let x = getNumber()
console.log(x)
