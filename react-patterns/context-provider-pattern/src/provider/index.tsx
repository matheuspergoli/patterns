import React from 'react'
import { CounterProvider } from '../context'

type ProviderType = ({ children }: { children: React.ReactNode }) => React.JSX.Element

interface ProviderProps {
	children: React.ReactNode
	providers: Array<ProviderType>
}

const CombineProviders = ({ children, providers }: ProviderProps) => {
	return (
		<>
			{providers.reduceRight((acc, Provider) => {
				return <Provider>{acc}</Provider>
			}, children)}
		</>
	)
}

export const Provider = ({ children }: { children: React.ReactNode }) => {
	return <CombineProviders providers={[CounterProvider]}>{children}</CombineProviders>
}
