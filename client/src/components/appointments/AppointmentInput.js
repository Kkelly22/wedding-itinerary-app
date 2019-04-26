import React, { Component } from 'react';

class AppointmentInput extends Component {
  state = {
    id: '',
    user: '',
    description: '',
    vendor: '',
    location: '',
    time: '',
    completed: false
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    let itineraryObject = {
      description: this.state.description,
      vendor: this.state.vendor,
      location: this.state.location,
      time: this.state.time,
      completed: this.state.completed
    }
    this.props.addAppointment(itineraryObject);
    this.setState({
      description: '',
      vendor: '',
      location: '',
      time: '',
      completed: false
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Appointment Description</label>
          <input type="text" name="description" value={this.state.description} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Appointment Vendor</label>
          <input type="text" name="vendor" value={this.state.vendor} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Appointment Location</label>
          <input type="text" name="location" value={this.state.location} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Appointment Time</label>
          <input type="datetime" name="time" value={this.state.time} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Appointment Completed?</label>
          <input type="boolean" name="completed" value={this.state.completed} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default AppointmentInput;