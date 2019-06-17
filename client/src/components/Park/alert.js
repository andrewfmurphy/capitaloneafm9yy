import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class Alert extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className="Alert">
          <Button variant="primary"> {this.props.title} </Button>
          <div>{this.props.description}</div>
          <div>{this.props.category}</div>
          </div>
      );
    }
  }

export default Alert;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION