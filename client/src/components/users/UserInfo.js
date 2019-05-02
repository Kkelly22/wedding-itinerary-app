import React, { Component } from 'react';
import './../../App.css';

class UserInfo extends Component {

  render() {

    return (
      <div className="user-info">
        Bride: {this.props.user.bride}
        <br />
        Groom: {this.props.user.groom}
        <br />
        Wedding Location: {this.props.user.wedding_location}
        <br />
        Wedding Date: {this.props.user.wedding_date}
      </div>
    );
  }
};

export default UserInfo;