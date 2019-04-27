import React, { Component } from 'react';

class Plan extends Component {

  render() {
    const { plan } = this.props;

    return (
      <div>
        <li>
          {plan.description}
          <button onClick={() => this.props.deletePlan(plan.id)}> X </button>
        </li>
      </div>
    );
  }
};

export default Plan;