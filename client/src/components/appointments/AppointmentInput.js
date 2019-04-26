import React, { Component } from 'react';

class AppointmentInput extends Component {
  state = {
    id: '',
    description: ''
  }

  handleOnChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addAppointment(this.state.description);
    this.setState({
      description: ''
    });
  }

  render() {
    return (
      <div>
        <label>Appointment Description</label>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.description}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default AppointmentInput;