import React, { Component } from 'react'
import AppointmentInput from '../components/appointments/AppointmentInput'
import Appointments from '../components/appointments/Appointments'
import { connect } from 'react-redux'

class AppointmentsContainer extends Component {
  render() {
    return (
      <div>
        <AppointmentInput addAppointment={this.props.addAppointment} />
        <Appointments appointments={this.props.appointments} deleteAppointment={this.props.deleteAppointment} />
      </div>
    )
  }
}

const mapStateToProps =  state  => ({ appointments: state.appointments })

const mapDispatchToProps = dispatch => ({
  addAppointment: text => dispatch({ type: "ADD_APPOINTMENT", text }),
  deleteAppointment: id => dispatch({ type: "DELETE_APPOINTMENT", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsContainer)