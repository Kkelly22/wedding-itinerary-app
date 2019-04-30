import React, { Component } from 'react';
import './../../App.css';
import Countdown from 'react-countdown-now';

class WeddingCountdown extends Component {
  render() {
    return (
      <div className="countdown-info">
        Time Until Wedding: <Countdown date={'Sat, 16 Nov 2019 05:00:00'} />
      </div>
    );
  }
};

export default WeddingCountdown;



