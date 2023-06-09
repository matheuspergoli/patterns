interface Props {
	name: string
	email: string
	username: string
}

export const Presentation = ({ name, username, email }: Props) => {
	return (
		<section className='px-3 text-white py-2 border border-zinc-300 rounded-md'>
			<h1>Name: {name}</h1>
			<h2>Username: {username}</h2>
			<h3>Email: {email}</h3>
		</section>
	)
}
