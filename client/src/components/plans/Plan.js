import React, { Component } from 'react';
import './../../App.css';

class Plan extends Component {

  render() {
    const { plan } = this.props;

    return (
      <div class="plan-data">
        <td>{plan.description}</td>
        <td>{plan.vendor}</td>
        <td>{plan.location}</td>
        <td>{plan.time}</td>
        <td>{plan.completed}</td>
        <td><button onClick={() => this.props.deletePlan(plan.id)}> X </button></td>
      </div>
    );
  }
};

export default Plan;
