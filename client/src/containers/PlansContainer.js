import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import PlanInput from '../components/plans/PlanInput'
import Plans from '../components/plans/Plans'
import UserInfo from '../components/users/UserInfo'
import WeddingInfo from '../components/users/WeddingInfo'
import WeddingCountdown from '../components/plans/WeddingCountdown'
import { fetchPlans, deletePlan, updatePlan, fetchPlan } from '../actions/planActions'

class PlansContainer extends Component {
  
  componentDidMount() {
    this.props.fetchPlans(this.props.current.id)
  }

  render() {
    return (
      <div>
        <UserInfo user={this.props.current}/>
        <br />
        <WeddingInfo user={this.props.current}/>
        <div class="plans-blur">
        </div>
        <div class="plans-container">
          <Plans plans={this.props.plans} deletePlan={this.props.deletePlan} fetchPlan={this.props.fetchPlan} />
          <PlanInput user={this.props.current} plan={this.props.current_plan}/>
          <WeddingCountdown user={this.props.current} />
          <br />
          <br />
          <Link to='/login'>Log Out</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps =  state  => ({ 
  plans: state.plans,
  current: state.current,
  current_plan: state.current_plan
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlans,
  deletePlan,
  updatePlan,
  fetchPlan,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlansContainer)