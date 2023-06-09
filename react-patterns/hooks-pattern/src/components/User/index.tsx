interface Props {
	name: string
	email: string
}

export const UserInfo = ({ name, email }: Props) => {
	return (
		<section className='rounded-md border border-zinc-800 px-3 py-2 flex flex-col gap-3'>
			<h1>Name: {name}</h1>
			<h2>Email: {email}</h2>
		</section>
	)
}
