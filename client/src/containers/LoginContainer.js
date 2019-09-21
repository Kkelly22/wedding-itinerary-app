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
        <div>
        </div>
        <div class="login-container">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
          
            <p>
            <label>Username</label>
            <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleOnChange(event)} />
            <br />
            </p>

            <p>
            <label>Password</label>
            <input type="text" name="password" value={this.state.password} onChange={(event) => this.handleOnChange(event)} />
            </p>

            <input type="submit" />
          </form>
          <br />
          <Link to='/signup'>Sign Up</Link>
          <Link to='/find'>Find Wedding</Link>
        </div>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(LoginContainer))