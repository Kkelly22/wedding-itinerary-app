import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createPlan, updatePlan } from '../../actions/planActions'

class PlanInput extends Component {

  state = {
    description: "",
    vendor: "",
    location: "",
    time: "", 
    completed: false,
    user_id: 0
  }

  constructor(props) {
    super(props);
    this.state = {
      description: props.plan.length == 0 ? "" : props.plan.description,
      vendor: props.plan.length == 0 ? "" : props.plan.vendor,
      location: props.plan.length == 0 ? "" : props.plan.location,
      time: props.plan.length == 0 ? "" : props.plan.time,
      completed: props.plan.length == 0 ? false : props.plan.completed,
      user_id: props.plan.length == 0 ? 0 : props.plan.user_id
    }
    console.log(this.state)
  }

  handleOnChange(event) {
    if (event.target.name === "completed") {
      this.setState({
        [event.target.name]: event.target.checked
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    if (this.props.plan.length == 0) {
       this.props.createPlan({...this.state, user_id: this.props.user.id});
    } else {
      this.props.updatePlan({...this.state});
    }
   
    this.setState({
      description: '',
      vendor: '',
      location: '',
      time: '',
      completed: false,
      user_id: 0
    });
  }

  render() {
    return (
      <div className="plan-input">
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
        <input type="submit" />
        </form>
      </div>
    );
  }
};



const mapDispatchToProps = dispatch => bindActionCreators({
  createPlan,
  updatePlan,
}, dispatch)

export default connect(null, mapDispatchToProps)(PlanInput)