import React, { Component } from 'react';
import Plan from './Plan'


class Plans extends Component {
  render(){

  	const plans = this.props.plans.map(plan => <Plan key={plan.id} plan={plan} deletePlan={this.props.deletePlan}/>)

  return (
    <div>
      {plans}
    </div>
  );
 };
};

export default Plans;