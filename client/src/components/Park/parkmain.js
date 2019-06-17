import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ParkContent from './parkcontent.js';
import PricingHours from './pricinghours.js';


class ParkMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row>
        <Col>
          <ParkContent description={this.props.park.description} directions={this.props.park.directionsInfo} weather={this.props.park.weatherInfo} />
        </Col>
        <Col md={4}>
          <PricingHours fees={this.props.park.entranceFees} passes={this.props.park.entrancePasses} hours={this.props.park.operatingHours} />
        </Col>
      </Row>
    );
  }
}

export default ParkMain;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION


