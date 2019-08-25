import React, { Component } from 'react';
import './../../App.css';
import Moment from 'react-moment';

class Plan extends Component {
  state = {
    count: 0
  }

  handleOnSubmit() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { plan } = this.props;

    return (
      <div className="plan-data">
        <td>{plan.description}</td>
        <td>{plan.vendor}</td>
        <td>{plan.location}</td>
        <td> <Moment parse="YYYY-MM-DD HH:mm">{plan.time}</Moment></td>
        <td><button onClick={() => this.handleOnSubmit()}> {this.state.count % 2 === 0 ? "Complete" : "Finished"} </button></td>
        <td><button onClick={() => this.props.deletePlan(plan)}> X </button></td>
        <td><button onClick={() => this.props.updatePlan(plan)}> X </button></td>
        
      </div>
    );
  }
};

export default Plan;
