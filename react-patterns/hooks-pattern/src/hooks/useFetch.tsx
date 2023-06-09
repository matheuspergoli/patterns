import React from 'react'

export const useFetch = <P extends Object>(url: string) => {
	const [loading, setLoading] = React.useState(true)
	const [data, setData] = React.useState<P | null>(null)

	React.useEffect(() => {
		try {
			setLoading(true)
			fetch(url)
				.then((res) => res.json())
				.then((data) => setData(data as P))
				.catch((error) => console.log(error))

			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}, [])

	return { loading, data: data as P }
}
