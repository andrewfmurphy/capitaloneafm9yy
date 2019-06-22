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

import {Link} from 'react-router-dom';

class ParkMain extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
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
            <Link to={this.props.path + "/generalinfo"}><Card.Img variant="top" src={infoicon} height="180px" width="180px" /></Link>
              <Card.Body>
              <Link to={this.props.path + "/generalinfo"}><div className={styles.iconcaption}>General Info</div></Link>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
            <Link to={this.props.path + "/alerts"}><Card.Img variant="top" src={alerticon} height="180px" width="180px" /></Link>
              <Card.Body>
              <Link to={this.props.path + "/alerts"}><div className={styles.iconcaption}>Alerts</div></Link>
              </Card.Body>
            </Card>

          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
            <Link to={this.props.path + "/campgrounds"}><Card.Img variant="top" src={campgroundicon} height="180px" width="180px" /></Link>
              <Card.Body>
              <Link to={this.props.path + "/campgrounds"}><div className={styles.iconcaption}>Campgrounds</div></Link>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
            <Link to={this.props.path + "/visitorcenters"}><Card.Img variant="top" src={visitorcentericon} height="180px" width="180px" /></Link>
              <Card.Body>
              <Link to={this.props.path + "/visitorcenters"}><div className={styles.iconcaption}>Visitor Centers</div></Link>
              </Card.Body>
            </Card>

          </Col>
        </Row>
        <Row className={styles.row2}>
          <Col>
            <Card bsPrefix={styles.icon}>
            <Link to={this.props.path + "/images"}><Card.Img variant="top" src={imagesicon} height="180px" width="180px" /></Link>
              <Card.Body>
              <Link to={this.props.path + "/images"}><div className={styles.iconcaption}>Images</div></Link>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
            <Link to={this.props.path + "/events"}><Card.Img variant="top" src={eventsicon} height="180px" width="180px" /></Link>
              <Card.Body>
              <Link to={this.props.path + "/events"}><div className={styles.iconcaption}>Events</div></Link>
              </Card.Body>
            </Card>

          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
            <Link to={this.props.path + "/educational"}><Card.Img variant="top" src={educationicon} height="180px" width="180px" /></Link>
              <Card.Body>
              <Link to={this.props.path + "/educational"}><div className={styles.iconcaption}>Educational</div></Link>
              </Card.Body>
            </Card>


          </Col>
          <Col>
            <Card bsPrefix={styles.icon}>
            <Link to={this.props.path + "/media"}><Card.Img variant="top" src={mediaicon} height="180px" width="180px" /></Link>
              <Card.Body>
              <Link to={this.props.path + "/media"}><div className={styles.iconcaption}>Media</div></Link>
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


