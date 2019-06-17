import React, { Component } from 'react';
import Alert from './alert.js'


class Alerts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className="AlertPanel">
          {this.props.alerts.map(alert => <Alert title={alert.title} category={alert.category} description={alert.description}/>)}
          </div>
      );
    }
  }

export default Alerts;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION