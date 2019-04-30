import React, { Component } from 'react';
import './../../App.css';

class UserInfo extends Component {

  render() {
  //  const { user } = this.props.current;

    return (
      <div className="user-info">
        Bride: 
        <br />
        Groom:
        <br />
        Wedding Location:
        <br />
        Wedding Date:
      </div>
    );
  }
};

export default UserInfo;