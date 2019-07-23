import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { createUser } from '../actions/userActions'


class SignupContainer extends Component {
  state = {
    username: '',
    password: '',
    bride: '',
    groom: '',
    wedding_location: '',
    wedding_date: '',
    wedding_code: '',
    bride_flag: false
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnToggle(event) {
    if (event.target.checked === true) {
      this.setState({
        bride_flag: true,
        wedding_code: Math.random().toString(36).substring(7),
      });
    } else {
      this.setState({
        bride_flag: false
      });
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state, () => this.props.history.push('/'));
    this.setState({
      username: '',
      password: '',
      bride: '',
      groom: '',
      wedding_location: '',
      wedding_date: '',
      wedding_code: '',
      bride_flag: false
    });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div class="signup-blur">
        </div>
        <div class="signup-container">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>Username</label>
            <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleOnChange(event)} />
            <br />
            <label>Password</label>
            <input type="text" name="password" value={this.state.password} onChange={(event) => this.handleOnChange(event)} />
            <br />
            <label>Brides Name</label>
            <input type="text" name="bride" value={this.state.bride} onChange={(event) => this.handleOnChange(event)} />
            <br />
            <label>Grooms Name</label>
            <input type="text" name="groom" value={this.state.groom} onChange={(event) => this.handleOnChange(event)} />
            <br />
            <label>Wedding Location</label>
            <input type="text" name="wedding_location" value={this.state.wedding_location} onChange={(event) => this.handleOnChange(event)} />
            <br />
             <label>Wedding Date</label>
            <input type="datetime-local" name="wedding_date" value={this.state.wedding_date} onChange={(event) => this.handleOnChange(event)} />
            <br />
            <br />
            <label>Are You The Bride or Groom?</label>
            <input type="radio" name="bride_flag" value="true" onChange={(event) => this.handleOnToggle(event)} />
            <br />
            <br />
            <label>Already Have the Bride and Groom Code? Enter Their Wedding Code Here</label>
            <input type="text" name="wedding_code" value={this.state.wedding_code} onChange={(event) => this.handleOnChange(event)} />
            <br />
            <input type="submit" />
          </form>
          <br />
          <Link to='/login'>Log In</Link>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(SignupContainer))