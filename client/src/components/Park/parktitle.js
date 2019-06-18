import React, { Component } from 'react';

import styles from './parktitle.module.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class ParkTitle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className={styles.parktitle}>
                <Row>
                    <Col>
                        <div className={styles.name}>{this.props.name}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.designator}>{this.props.designation}</div>
                    </Col>
                    <Col xs={4}>
                    <div className={styles.latlong}>{this.props.latlong.substring(4,15)}&#176;N</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className={styles.designator}>{this.props.state.replace(/[,]/g, ", ")}</div>
                    
                    </Col>
                    <Col xs={4}>
                    <div className={styles.latlong}>{this.props.latlong.substring(23, 34)}&#176;W</div>
                    </Col>
                </Row>
                <hr className={styles.divider}></hr>
            </div>

        );
    }
}

export default ParkTitle;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION