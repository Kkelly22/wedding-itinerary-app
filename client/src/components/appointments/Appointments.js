import React, { Component } from 'react';
import Appointment from './Appointment'


class Appointments extends Component {
  render(){

  	const appointments = this.props.appointments.map(appointment => <Appointment key={appointment.id} appointment={appointment} deleteAppointment={this.props.deleteAppointment}/>)

  return (
    <div>
      {appointments}
    </div>
  );
 };
};

export default Appointments;