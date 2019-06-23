//View for visitor centers

import React, { Component } from 'react';

//Component imports
import VisitorCenter from './visitorcenter.js'


class VisitorCenters extends Component {
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

      //No current visitor centers
      if (this.props.visitorcenters.length == 0) {
       
        return (
          <div style={scope.none}>
            There are no Visitor Centers at this time
            </div>
        )
      }
      else {
      return (
          <div className="centerlist">
          {this.props.visitorcenters.map(center => <VisitorCenter latlong={center.latLong} name={center.name} 
          description={center.description} directions={center.directionsInfo} url={center.url}/>)}
          </div>
      );
    }
  }
  }

export default VisitorCenters;