import { UsersPresentation } from './components/Users/Presentation'

export const App = () => {
	return (
		<main className='container mx-auto p-3'>
			<UsersPresentation
				renderName={(name) => <h1>{name}</h1>}
				renderEmail={(email) => <h2>{email}</h2>}
			/>
		</main>
	)
}

export default App
