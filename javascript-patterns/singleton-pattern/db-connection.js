let instance

class DBConnection {
	constructor(uri) {
		if (instance) {
			throw new Error('Cannot instantiate more than one DBConnection, use connection')
		}

		this.uri = uri
		instance = this
	}

	connect() {
		console.log(`DB ${this.uri} has been connected!`)
	}

	disconnect() {
		console.log('DB disconnected')
	}
}

export const connection = Object.freeze(new DBConnection('mydb://local-db-test:3000'))
