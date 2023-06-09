const person = {
	name: 'John Doe',
	age: 42,
	email: 'john@doe.com',
	country: 'Canada'
}

const personProxy = Object.freeze(
	new Proxy(person, {
		get: (target, prop) => {
			console.log(`The value of ${prop} is ${target[prop]}`)
			return Reflect.get(target, prop)
		},

		set: (target, prop, value) => {
			console.log(`Changed ${prop} from ${target[prop]} to ${value}`)
			Reflect.set(target, prop, value)
		}
	})
)

personProxy.age = 43
