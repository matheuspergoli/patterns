import { Form } from './components/Form'

export const App = () => {
	const data = [
		{
			id: 1,
			name: 'John Doe'
		},
		{
			id: 2,
			name: 'Beny Doe'
		},
		{
			id: 3,
			name: 'Jeny Doe'
		},
		{
			id: 4,
			name: 'Joe Doe'
		},
		{
			id: 5,
			name: 'Bro Doe'
		}
	]

	return (
		<main className='container mx-auto p-3'>
			<Form>
				<Form.Input />
				<Form.List>
					{data.map((item) => (
						<Form.ListItem key={item.id} value={item.name}>
							{item.name}
						</Form.ListItem>
					))}
				</Form.List>
			</Form>
		</main>
	)
}
