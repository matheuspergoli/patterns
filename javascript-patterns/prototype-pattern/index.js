class User {
	constructor(firstName, lastName, email) {
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
		this.fullName = `${firstName} ${lastName}`
	}

	checkLastOnline() {
		console.log(`${this.fullName} was last online at ${Date.now()}`)
	}

	sendEmail() {
		console.log(`Email sent to ${this.email}`)
	}

	delete() {
		console.log('User removed')
	}
}

const user = new User('John', 'Doe', 'john@doe.com')

const user2 = new User('Jane', 'Doe', 'jane@doe.com')

console.log(user)
