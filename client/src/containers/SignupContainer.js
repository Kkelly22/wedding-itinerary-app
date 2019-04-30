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
    wedding_date: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
      wedding_date: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
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
          <input type="text" name="wedding_date" value={this.state.wedding_date} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <input type="submit" />
        </form>
        <Link to='/login'>Log In</Link>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(SignupContainer))