export default function managePlans(state = [], action) {
	switch (action.type) {
		case 'FETCH_PLAN':
        	return action.payload
	    default: return state
	}
}