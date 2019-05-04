import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PlanInput from '../components/plans/PlanInput'
import Plans from '../components/plans/Plans'
import UserInfo from '../components/users/UserInfo'
import WeddingCountdown from '../components/plans/WeddingCountdown'
import { fetchPlans, deletePlan } from '../actions/planActions'

class PlansContainer extends Component {
  
  componentDidMount() {
    this.props.fetchPlans(this.props.current.id)
  }

  render() {
    return (
      <div>
        <UserInfo user={this.props.current}/>
        <Plans plans={this.props.plans} deletePlan={this.props.deletePlan} />
        <PlanInput user={this.props.current}/>
        <WeddingCountdown />
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
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlansContainer)