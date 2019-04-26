import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageAppointments(state = {
	appointments: []
}, action) {
	switch (action.type) {
	    case 'ADD_APPOINTMENT':
		  const appointment = {
	        id: cuid(),
	        description: action.description
	      }
	      return {...state, appointments: [...state.appointments, appointment ]}

	    case 'DELETE_APPOINTMENT':
	      const appointments = state.appointments.filter(appointment => appointment.id !== action.id);
	      return {...state, appointments}

	    default:
	      return state;
	}

}