import React from 'react'
import { Presentation } from '../Presentation'

interface UserProps {
	id: number
	name: string
	email: string
	username: string
}

export const Container = () => {
	const [users, setUsers] = React.useState<null | UserProps[]>(null)

	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => setUsers(json))
	}, [])

	return (
		<>
			{users?.map((user) => (
				<Presentation
					key={user.id}
					name={user.name}
					email={user.email}
					username={user.username}
				/>
			))}
		</>
	)
}
