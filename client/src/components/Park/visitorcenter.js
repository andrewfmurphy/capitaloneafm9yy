import React, { Component } from 'react';


class VisitorCenter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="center">
        <div>{this.props.name}</div>
        <div>{this.props.description}</div>
        </div>
      );
    }
  }

export default VisitorCenter;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION