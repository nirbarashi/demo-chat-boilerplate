// Helper methods for local storage
const storage = () => {
	const clientStorage = window.localStorage;

	return {
		set: (key, value) => clientStorage.setItem(key, JSON.stringify(value)),
		get: (key) => JSON.parse(clientStorage.getItem(key)),
	}
}

export default storage();