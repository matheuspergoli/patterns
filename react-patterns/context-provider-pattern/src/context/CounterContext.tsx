import React from 'react'

interface CounterContextType {
	count: number
	setCount: React.Dispatch<React.SetStateAction<number>>
}

export const CounterContext = React.createContext({} as CounterContextType)

export const CounterProvider = ({ children }: { children: React.ReactNode }) => {
	const [count, setCount] = React.useState(0)

	return (
		<CounterContext.Provider value={{ count, setCount }}>
			{children}
		</CounterContext.Provider>
	)
}
