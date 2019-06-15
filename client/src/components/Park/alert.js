import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className="Alert">
          <div>{this.props.title}</div>
          <div>{this.props.description}</div>
          <div>{this.props.category}</div>
          </div>
      );
    }
  }

export default Alert;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION