import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { loginUser } from '../actions/userActions'


class LoginContainer extends Component {
  state = {
    username: '',
    password: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.loginUser(this.state, () => this.props.history.push('/'));
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Password</label>
          <input type="text" name="password" value={this.state.password} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <input type="submit" />
        </form>
        <br />
        <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(LoginContainer))