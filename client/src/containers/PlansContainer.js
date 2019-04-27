import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PlanInput from '../components/plans/PlanInput'
import Plans from '../components/plans/Plans'
import { fetchPlans, deletePlan } from '../actions/planActions'


class PlansContainer extends Component {
  
  componentWillMount() {
    this.props.fetchPlans()
  }

  render() {
    return (
      <div>
        <PlanInput />
        <Plans plans={this.props.plans} deletePlan={this.props.deletePlan} />
      </div>
    )
  }
}

const mapStateToProps =  state  => ({ plans: state.plans })

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlans,
  deletePlan,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlansContainer)