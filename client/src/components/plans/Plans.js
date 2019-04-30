import React, { Component } from 'react';
import Plan from './Plan'
import './../../App.css';

class Plans extends Component {
  render(){

  	const plans = this.props.plans.map(plan => <Plan key={plan.id} plan={plan} deletePlan={this.props.deletePlan}/>)
  return (
    <div class="plan-header">
    <h1>Wedding Day Itinerary</h1>
     <table>
     	<thead>
          <tr>
            <th>Description</th>
            <th>Vendor</th>
            <th>Location</th>
            <th>Time</th>
            <th>Completed?</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          <tr>
          	{plans}
          </tr>
        </tbody>
      </table>
    </div>
  );
 };
};

export default Plans;

