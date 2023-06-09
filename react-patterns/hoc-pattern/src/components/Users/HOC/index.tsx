import React from 'react'

export const withData = <P extends object>(
	Component: React.ComponentType<P>,
	url: string
): React.FC<Omit<P, 'data'>> => {
	return (props) => {
		const [data, setData] = React.useState<null | P>(null)

		React.useEffect(() => {
			fetch(url)
				.then((response) => response.json())
				.then((json) => setData(json as P))
		}, [])

		if (!data) {
			return <div>Loading...</div>
		}

		return <Component {...(props as P)} data={data} />
	}
}
