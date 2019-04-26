import React, { Component } from 'react';

class Appointment extends Component {

  render() {
    const { appointment } = this.props;

    return (
      <div>
        <li>
          {appointment.description}
          <button onClick={() => this.props.deleteAppointment(appointment.id)}> X </button>
        </li>
      </div>
    );
  }
};

export default Appointment;