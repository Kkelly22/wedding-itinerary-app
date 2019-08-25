import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import PlanInput from '../components/plans/PlanInput'
import Plans from '../components/plans/Plans'
import UserInfo from '../components/users/UserInfo'
import WeddingInfo from '../components/users/WeddingInfo'
import WeddingCountdown from '../components/plans/WeddingCountdown'
import { fetchPlans, deletePlan, updatePlan } from '../actions/planActions'

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
          <Plans plans={this.props.plans} deletePlan={this.props.deletePlan} updatePlan={this.props.updatePlan} />
          <PlanInput user={this.props.current}/>
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
  current: state.current
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlans,
  deletePlan,
  updatePlan,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlansContainer)