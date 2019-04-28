import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
    this.props.loginUser(this.state);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <label>Password</label>
          <input type="text" name="password" value={this.state.password} onChange={(event) => this.handleOnChange(event)} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default connect(null, mapDispatchToProps)(LoginContainer)