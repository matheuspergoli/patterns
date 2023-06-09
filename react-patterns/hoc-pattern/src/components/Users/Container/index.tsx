import { withData } from '../HOC'
import { UsersPresentation } from '../Presentation'

interface User {
	data: {
		id: number
		name: string
		email: string
		username: string
	}[]
}

const Container = (props: User) => {
	return (
		<main className='mx-auto container px-3 flex flex-col gap-5'>
			{props.data.map((user) => (
				<UsersPresentation key={user.id} {...user} />
			))}
		</main>
	)
}

export const UsersContainer = withData(
	Container,
	'https://jsonplaceholder.typicode.com/users'
)
