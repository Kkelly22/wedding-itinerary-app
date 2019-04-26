import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageAppointments(state = {
	appointments: []
}, action) {
	switch (action.type) {
	    case 'ADD_APPOINTMENT':
		  const appointment = {
	        id: cuid(),
	        user: '',
	        description: action.itineraryObject.description,
	        vendor: action.itineraryObject.vendor,
	        location: action.itineraryObject.location,
	        time: action.itineraryObject.time,
	        completed: action.itineraryObject.completed
	      }
	      return {...state, appointments: [...state.appointments, appointment ]}

	    case 'DELETE_APPOINTMENT':
	      const appointments = state.appointments.filter(appointment => appointment.id !== action.id);
	      return {...state, appointments}

	    default:
	      return state;
	}

}