import React, { Component } from 'react';
import './../../App.css';
import Moment from 'react-moment';

class Plan extends Component {

  render() {
    const { plan } = this.props;
    return (
      <div className="plan-data">
        <td>{plan.description}</td>
        <td>{plan.vendor}</td>
        <td>{plan.location}</td>
        <td> <Moment parse="YYYY-MM-DD HH:mm">{plan.time}</Moment></td>
        <td>{ plan.completed ? "Yes" : "No" }</td>
        <td><button onClick={() => this.props.deletePlan(plan.id)}> X </button></td>
      </div>
    );
  }
};

export default Plan;
