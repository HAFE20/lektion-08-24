import { randomNumber, increase, getList } from  './module'

console.log('Welcome to typescript demo')

for( let i: number = 0; i<10; i++ ) {
	console.log('number ' + i);
}

let random = randomNumber();
console.log(random)
let x = increase(15)
let list = getList()


let mixed = [1, 'två', 3, 'fyra']
// mixed.push(true)
// mixed.push(null)
