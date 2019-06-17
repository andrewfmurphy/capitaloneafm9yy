import React, { Component } from 'react';

class ParkContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className="ParkContent">
          <h2>Description</h2>
          <div>{this.props.description}</div>
          <h2>Directions</h2>
          <div>{this.props.directions}</div>
          <h2>Weather</h2>
          <div>{this.props.weather}</div>
          </div>
      );
    }
  }

export default ParkContent;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION