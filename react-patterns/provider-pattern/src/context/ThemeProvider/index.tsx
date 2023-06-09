import React from 'react'

interface ContextProps {
	theme: string
	toggleTheme: () => void
}

export const ThemeContext = React.createContext({} as ContextProps)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = React.useState<'dark' | 'light'>('light')

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
