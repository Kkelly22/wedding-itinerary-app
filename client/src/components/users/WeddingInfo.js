import React, { Component } from 'react';
import './../../App.css';

class WeddingInfo extends Component {

  render() {

    return (
      <div className="wedding-info">
        Wedding Location: {this.props.user.wedding_location}
        <br />
        Wedding Date: {this.props.user.wedding_date}
      </div>
    );
  }
};

export default WeddingInfo;