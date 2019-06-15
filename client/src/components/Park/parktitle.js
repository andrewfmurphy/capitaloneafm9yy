import React, { Component } from 'react';

class ParkTitle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className="ParkTitle">
          <div>{this.props.name}</div>
          <div>{this.props.designation}</div>
          <div>{this.props.state}</div>
          </div>
      );
    }
  }

export default ParkTitle;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION