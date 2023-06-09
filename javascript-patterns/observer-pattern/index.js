import Observable from './observer.js'
import { sendToGoogleAnalytics, sendToCustomAnalytics, sendToEmail } from './analytics.js'

Observable.subscribe(sendToEmail)
Observable.subscribe(sendToCustomAnalytics)
Observable.subscribe(sendToGoogleAnalytics)

const pinkBtn = document.getElementById('pink-btn')
const blueBtn = document.getElementById('blue-btn')

pinkBtn.addEventListener('click', () => {
	const data = '🎀 Click on pink button! 🎀'

	Observable.notify(data)
})

blueBtn.addEventListener('click', () => {
	const data = '🦋 Click on blue button! 🦋'

	Observable.notify(data)
})
