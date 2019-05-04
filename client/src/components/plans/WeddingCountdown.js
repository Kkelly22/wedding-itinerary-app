import React, { Component } from 'react';
import './../../App.css';
import Countdown from 'react-countdown-now';

class WeddingCountdown extends Component {
  render() {
  	const weddingDate = !!this.props.user.wedding_date ? this.props.user.wedding_date.toString() : ""

    return (
      <div className="countdown-info">
        Time Until Wedding: <Countdown date={weddingDate} />
      </div>
    );
  }
};

export default WeddingCountdown;



