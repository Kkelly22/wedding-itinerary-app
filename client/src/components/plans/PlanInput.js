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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.plan.description !== this.state.description) {
      this.setState({ description: nextProps.plan.description });
    }
    if (nextProps.plan.vendor !== this.state.vendor) {
      this.setState({ vendor: nextProps.plan.vendor });
    }
    if (nextProps.plan.location !== this.state.location) {
      this.setState({ location: nextProps.plan.location });
    }
    if (nextProps.plan.time !== this.state.time && !!nextProps.plan.time == true) {
      this.setState({ time: nextProps.plan.time.replace("Z","") });
    }
    if (nextProps.plan.completed !== this.state.completed) {
      this.setState({ completed: nextProps.plan.completed });
    }
    if (nextProps.plan.user_id !== this.state.user_id) {
      this.setState({ user_id: nextProps.plan.user_id });
    }
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
    if (!!this.props.plan.id) {
      this.props.updatePlan({...this.state, id: this.props.plan.id});
    } else {
      this.props.createPlan({...this.state, user_id: this.props.user.id});
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
    const plan = !!this.props.plan ? this.props.plan : []

    return (
      <div className="plan-input">
      <h3>Add to the Itinerary:</h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
          <label>Plan Description</label>
          <input type="text" name="description" value={this.state.description} onChange={(event) => this.handleOnChange(event)} />
          </p>

          <p>
          <label>Plan Vendor</label>
          <input type="text" name="vendor" value={this.state.vendor} onChange={(event) => this.handleOnChange(event)} />
          </p>

          <p>
          <label>Plan Location</label>
          <input type="text" name="location" value={this.state.location} onChange={(event) => this.handleOnChange(event)} />
          </p>

          <p>
          <label>Plan Time</label>
          <input type="datetime-local" name="time" value={this.state.time} onChange={(event) => this.handleOnChange(event)} />
          </p>
          
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