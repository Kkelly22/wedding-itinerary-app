import React, { Component } from 'react';
import './../../App.css';
import Moment from 'react-moment';

class WeddingInfo extends Component {

  render() {

    return (
      <div className="wedding-info">
        Wedding Location: {this.props.user.wedding_location}
        <br />
        Wedding Date: <Moment parse="YYYY-MM-DD HH:mm">{this.props.user.wedding_date}</Moment> 
        <br />
        Wedding Code: {this.props.user.wedding_code}
      </div>
    );
  }
};

export default WeddingInfo;