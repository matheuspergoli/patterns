import { useTheme } from './hooks'

export const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<main className='container mx-auto p-3'>
			<h1 className='text-3xl font-semibold mb-10'>Actual Theme: {theme}</h1>
			<button
				onClick={toggleTheme}
				className='rounded-md border border-zinc-800 px-3 py-2'>
				Change Theme
			</button>
		</main>
	)
}

export default App
