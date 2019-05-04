export default function managePlans(state = [], action) {
	switch (action.type) {
	    case 'FETCH_PLANS':
	      return action.payload
	    case 'CREATE_PLAN':
	      return [ ...state, action.payload] 
	    case 'DELETE_PLAN':
	      return state.filter(plan => plan.id !== action.payload)
	    default: return state
	}
}