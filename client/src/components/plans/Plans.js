import React, { Component } from 'react';
import Plan from './Plan'
import './../../App.css';

class Plans extends Component {
  render(){
  	const plans = !!this.props.plans ? this.props.plans.map(plan => <Plan key={plan.id} plan={plan} deletePlan={this.props.deletePlan} fetchPlan={this.props.fetchPlan}/>) : []
  return (
    <div className="plan-list">
        <ol>
            {plans}
        </ol>
    </div>
  );
 };
};

export default Plans;

