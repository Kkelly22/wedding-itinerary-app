export default function managePlans(state = {plans: []}, action) {
	switch (action.type) {
	    case 'FETCH_PLANS':
	    debugger
	      return { ...state, all: action.payload }
	    case 'CREATE_PLAN':
	    debugger
	      return { ...state, all: [...state.all, action.payload] }
	    case 'DELETE_PLAN':
	      return { ...state, all: state.all.filter(plan => plan.id !== action.payload.id) }
	    default: return state
	}
}