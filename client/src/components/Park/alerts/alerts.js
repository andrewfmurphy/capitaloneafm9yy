//View component for alerts

import React, { Component } from 'react';

//Component imports
import Alert from './alert.js'


class Alerts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const scope = {
      none: {
        "font-size": "48px",
        "text-align": "center",
        "margin-top": "200px",
        "font-weight": "800"

      }
    }
    //No current alerts
    if (this.props.alerts.length == 0) {
     
      return (
        <div style={scope.none}>
          There are no Alerts at this time
          </div>
      )
    }
    else {
      return (
        <div className="AlertPanel">
          {this.props.alerts.map(alert => <Alert title={alert.title} category={alert.category} description={alert.description} url={alert.url} />)}
        </div>
      );
    }

  }
}

export default Alerts;