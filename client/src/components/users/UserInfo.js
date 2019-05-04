import React, { Component } from 'react';
import './../../App.css';

class UserInfo extends Component {

  render() {

    return (
      <div className="user-info">
        The Wedding of {this.props.user.bride} & {this.props.user.groom}
      </div>
    );
  }
};

export default UserInfo;