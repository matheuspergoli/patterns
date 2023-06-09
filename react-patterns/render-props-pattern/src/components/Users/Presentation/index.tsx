interface Props {
	renderName: (name: string) => JSX.Element
	renderEmail: (email: string) => JSX.Element
}

export const UsersPresentation = ({ renderName, renderEmail }: Props) => {
	return (
		<section className='rounded-md border border-zinc-300 px-3 py-2'>
			{renderName('John Doe')}
			{renderEmail('john@email.com')}
		</section>
	)
}
