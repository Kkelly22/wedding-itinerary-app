import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createPlan } from '../../actions/planActions'

class PlanInput extends Component {
  state = {
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
    this.props.createPlan(this.state);
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
      <div class="plan-input">
      <h3>Add to the Itinerary:</h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Plan Description</label>
          <input type="text" name="description" value={this.state.description} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Plan Vendor</label>
          <input type="text" name="vendor" value={this.state.vendor} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Plan Location</label>
          <input type="text" name="location" value={this.state.location} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Plan Time</label>
          <input type="datetime-local" name="time" value={this.state.time} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Plan Completed?</label>
          <input type="checkbox" name="completed" value={this.state.completed} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};



const mapDispatchToProps = dispatch => bindActionCreators({
  createPlan
}, dispatch)

export default connect(null, mapDispatchToProps)(PlanInput)