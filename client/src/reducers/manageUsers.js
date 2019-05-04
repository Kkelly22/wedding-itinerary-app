export default function manageUsers(state = [], action) {
	switch (action.type) {
		case 'SET_USER':
	      return action.payload
	    default: return state
	}
}