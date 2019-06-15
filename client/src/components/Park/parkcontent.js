import React, { Component } from 'react';

class ParkContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className="ParkTitle">
          <div>{this.props.description}</div>
          <div>{this.props.directions}</div>
          <div>{this.props.weather}</div>
          </div>
      );
    }
  }

export default ParkContent;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION