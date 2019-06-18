import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ParkContent from './parkcontent.js';
import PricingHours from './pricinghours.js';
import Image from 'react-bootstrap/Image';


class ParkMain extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.park.images)
  }
  render() {
    return (
      <Row>
        <Col>
          <ParkContent description={this.props.park.description} directions={this.props.park.directionsInfo} weather={this.props.park.weatherInfo} image={this.props.park.images[0]} />
        </Col>
        <Col md={3}>
          <PricingHours fees={this.props.park.entranceFees} passes={this.props.park.entrancePasses} hours={this.props.park.operatingHours} />
        </Col>
      </Row>
    );
  }
}

export default ParkMain;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION


