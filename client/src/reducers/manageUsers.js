export default function manageUsers(state = [], action) {
	switch (action.type) {
		case 'SET_USER':
		debugger
	      return [...state, action.payload]
	    default: return state
	}
}