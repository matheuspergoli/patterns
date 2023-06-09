const observers = []

export default Object.freeze({
	notify: (data) => observers.forEach((observer) => observer(data)),
	subscribe: (func) => observers.push(func),
	unsubscribe: (func) => observers.splice(observers.indexOf(func), 1)
})
