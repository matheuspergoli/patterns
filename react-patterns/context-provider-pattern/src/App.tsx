import { useCounter } from './hooks'

export const App = () => {
	const { count, setCount } = useCounter()

	return (
		<main className='container mx-auto px-3'>
			<h1 className='mb-5 text-2xl font-semibold'>Count value: {count}</h1>
			<button
				className='rounded-md bg-blue-600 px-3 py-2 text-white'
				onClick={() => setCount((prev) => prev + 1)}>
				Increase count
			</button>
		</main>
	)
}
