import { isAllLetters, isValidEmail } from './validators.js'

class Person {
	constructor(firstName, lastName, age, email) {
		this.firstName = firstName
		this.lastName = lastName
		this.age = age
		this.email = email
	}
}

const date = new Intl.DateTimeFormat('pt-BR', {
	day: '2-digit',
	month: '2-digit',
	year: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit'
})

const user = new Proxy(new Person('Matheus', 'Pergoli', 23, 'matheus@email.com'), {
	get: (target, prop) => {
		console.log(`${date.format()} | The value of ${prop} is ${target[prop]}`)
		return Reflect.get(target, prop)
	},

	set: (target, prop, value) => {
		switch (prop) {
			case 'firstName': {
				if (!isAllLetters(value)) throw new Error('First name must be all letters')
				break
			}

			case 'lastName': {
				if (!isAllLetters(value)) throw new Error('Last name must be all letters')
				break
			}

			case 'email': {
				if (!isValidEmail(value)) throw new Error('Invalid email')
				break
			}

			case 'age': {
				if (value < 18) throw new Error('User must be at least 18 years old')
				break
			}

			default: {
				break
			}
		}

		console.log(`Changed ${prop} from ${target[prop]} to ${value}`)
		return Reflect.set(target, prop, value)
	}
})

console.log(user.age)
