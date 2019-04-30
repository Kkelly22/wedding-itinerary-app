export default function managePlans(state = {plans: []}, action) {
	switch (action.type) {
	    case 'FETCH_PLANS':
	      return { ...state, plans: action.payload }
	    case 'CREATE_PLAN':
	      return { ...state, plans: [...state.plans, action.payload] }
	    case 'DELETE_PLAN':
	      return { ...state, plans: state.plans.filter(plan => plan.id !== action.payload.id) }
	    default: return state
	}
}