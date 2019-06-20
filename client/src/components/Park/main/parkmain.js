import React, { Component } from 'react';
import styles from './parkmain.module.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'

import infoicon from '../symbollibrary/information-black-30.svg';
import alerticon from '../symbollibrary/safety-caution-alerts-black-30.svg';
import campgroundicon from '../symbollibrary/campground-black-30.svg';
import visitorcentericon from '../symbollibrary/visitor-center-black-30.svg';
import imagesicon from '../symbollibrary/photography-black-30.svg';
import educationicon from '../symbollibrary/young-scientist-program-black-30.svg';
import eventsicon from '../symbollibrary/calendar-events-black-30.svg';
import mediaicon from '../symbollibrary/newspaper-black-30.svg';

class ParkMain extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.park.images)
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className={styles.description}>{this.props.park.description}</div>
          </Col>
          {/* <Col md={3}>
          <PricingHours fees={this.props.park.entranceFees} passes={this.props.park.entrancePasses} hours={this.props.park.operatingHours} />
        </Col> */}
        </Row>
        <Row className={styles.row1}>
          <Col>
            <Card bsPrefix={styles.icon}>
              <Card.Img variant="top" src={infoicon} height="180px" width="180px" />
              <Card.Body>
                <Card.Title className={styles.iconcaption}>General Info</Card.Title>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
              <Card.Img variant="top" src={alerticon} height="180px" width="180px" />
              <Card.Body>
                <Card.Title className={styles.iconcaption}>Alerts</Card.Title>
              </Card.Body>
            </Card>

          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
              <Card.Img variant="top" src={campgroundicon} height="180px" width="180px" />
              <Card.Body>
                <Card.Title className={styles.iconcaption}>Campgrounds</Card.Title>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
              <Card.Img variant="top" src={visitorcentericon} height="180px" width="180px" />
              <Card.Body>
                <Card.Title className={styles.iconcaption}>Visitor Centers</Card.Title>
              </Card.Body>
            </Card>

          </Col>
        </Row>
        <Row className={styles.row2}>
          <Col>
            <Card bsPrefix={styles.icon}>
              <Card.Img variant="top" src={imagesicon} height="180px" width="180px" />
              <Card.Body>
                <Card.Title className={styles.iconcaption}>Images</Card.Title>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
              <Card.Img variant="top" src={eventsicon} height="180px" width="180px" />
              <Card.Body>
                <Card.Title className={styles.iconcaption}>Events</Card.Title>
              </Card.Body>
            </Card>

          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
              <Card.Img variant="top" src={educationicon} height="180px" width="180px" />
              <Card.Body>
                <Card.Title className={styles.iconcaption}>Educational</Card.Title>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
              <Card.Img variant="top" src={mediaicon} height="180px" width="180px" />
              <Card.Body>
                <Card.Title className={styles.iconcaption}>Media</Card.Title>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default ParkMain;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION


