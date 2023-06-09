import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Provider } from './provider'

import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider>
			<App />
		</Provider>
	</React.StrictMode>
)
