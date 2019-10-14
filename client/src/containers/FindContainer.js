import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { FindUser } from '../actions/userActions'


class FindContainer extends Component {
  state = {
    wedding_code: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.FindUser(this.state, () => this.props.history.push('/'));
    this.setState({
      wedding_code: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Find Wedding</h1>
        <div>
        </div>
        <div class="login-container">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>Wedding Code</label>
            <input type="text" name="wedding_code" value={this.state.wedding_code} onChange={(event) => this.handleOnChange(event)} />
            <br />
            <input type="submit" />
          </form>
          <br />

          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-bars"></i>
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link class="dropdown-item" to='/login'>Log In</Link>
              <Link class="dropdown-item" to='/signup'>Sign Up</Link>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  FindUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(FindContainer))