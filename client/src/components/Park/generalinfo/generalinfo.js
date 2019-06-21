import React, { Component } from 'react';
import styles from './generalinfo.module.css';
import PricingHours from './pricinghours.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.park);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={9}>
                        <div className={styles.address}>
                            <div className={styles.line1}>{this.props.address.line1}</div>
                            <div className={styles.line2}>{this.props.address.line2}</div><div className={styles.line3}>{this.props.address.line3}</div>
                            <div className={styles.line4}>{this.props.address.city}, {this.props.address.stateCode} {this.props.address.postalCode}</div>
                        </div>
                        <div className={styles.contacts}>
                            <div>{this.props.contacts.phoneNumbers.map(number => <div>{number.phoneNumber} {number.type == "Voice" ? "" : number.type}</div>)}</div>
                            <div>{this.props.contacts.emailAddresses.map(email => <div>{email.emailAddress}</div>)}</div>
                        </div>
                        <div className={styles.directions}>
                            {this.props.park.directionsInfo}
                        </div>
                        {this.props.park.directionsUrl != null ? <div>Additional directions information available <a href={this.props.park.directionsUrl}>here</a>.</div> : null}
                        <div className={styles.weather}>{this.props.park.weatherInfo}</div>
                    </Col>
                    <Col>
                        <PricingHours fees={this.props.park.entranceFees} passes={this.props.park.entrancePasses} hours={this.props.park.operatingHours} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default GeneralInfo;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION