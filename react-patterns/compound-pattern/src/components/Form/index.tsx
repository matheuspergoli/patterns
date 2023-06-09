import React from 'react'

interface FormContextProps {
	open: boolean
	toggle: () => void
	value: string
	setValue: (value: string) => void
}

const FormContext = React.createContext({} as FormContextProps)

export const Form = ({ children }: React.PropsWithChildren) => {
	const [value, setValue] = React.useState('')
	const [open, setOpen] = React.useState(false)
	const toggle = React.useCallback(() => setOpen((open) => !open), [])

	return (
		<FormContext.Provider value={{ open, toggle, value, setValue }}>
			<form className='max-w-sm w-full'>{children}</form>
		</FormContext.Provider>
	)
}

const Input = () => {
	const { value, setValue, toggle } = React.useContext(FormContext)

	return (
		<input
			type='text'
			onFocus={toggle}
			onBlur={toggle}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			className='border border-gray-400 w-full outline-none p-3'
		/>
	)
}

const List = ({ children }: React.PropsWithChildren) => {
	const { open } = React.useContext(FormContext)

	return open ? <ul className='flex flex-col'>{children}</ul> : null
}

const ListItem = ({ children, value }: { children: React.ReactNode; value: string }) => {
	const { setValue } = React.useContext(FormContext)

	return (
		<li
			onMouseDown={() => setValue(value)}
			className='border-b bg-zinc-500/5 cursor-pointer px-3 py-2'>
			{children}
		</li>
	)
}

Form.Input = Input
Form.List = List
Form.ListItem = ListItem
