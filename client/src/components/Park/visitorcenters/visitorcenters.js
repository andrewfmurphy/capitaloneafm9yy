import React, { Component } from 'react';
import VisitorCenter from './visitorcenter.js'


class VisitorCenters extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className="centerlist">
          {this.props.visitorcenters.map(center => <VisitorCenter name={center.name} description={center.description} directions={center.directionsInfo}/>)}
          </div>
      );
    }
  }

export default VisitorCenters;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION