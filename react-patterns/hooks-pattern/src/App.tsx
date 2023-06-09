import { UserInfo } from './components/User'
import { useFetch } from './hooks/useFetch'

interface User {
	name: string
	email: string
}

export const App = () => {
	const { loading, data } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')

	console.log(loading)

	if (loading) return <p>Loading...</p>

	return (
		<main className='container mx-auto p-3 flex flex-col gap-5'>
			{data &&
				data.map((user: any) => (
					<UserInfo key={user.id} name={user.name} email={user.email} />
				))}
		</main>
	)
}
