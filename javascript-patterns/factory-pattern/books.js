import cripto from 'node:crypto'

function Book(title, author) {
	this.title = title
	this.author = author

	return {
		id: cripto.randomBytes(20).toString('hex'),
		title: this.title,
		author: this.author
	}
}

const book1 = new Book('Book One', 'John Doe')
const book2 = new Book('Book Two', 'Jane Doe')
const book3 = new Book('Book Three', 'Toby Doe')
const book4 = new Book('Book Four', 'Mary Doe')
const book5 = new Book('Book Five', 'Peter Doe')

export { book1, book2, book3, book4, book5 }
