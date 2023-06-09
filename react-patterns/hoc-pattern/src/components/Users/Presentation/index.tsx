interface Props {
	name: string
	email: string
	username: string
}

export const UsersPresentation = ({ name, username, email }: Props) => {
	return (
		<section className='rounded-md px-3 py-2 border border-zinc-300'>
			<h1>Name: {name}</h1>
			<h2>Username: {username}</h2>
			<h3>Email: {email}</h3>
		</section>
	)
}
