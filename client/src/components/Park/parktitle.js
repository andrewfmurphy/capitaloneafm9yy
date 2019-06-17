import React, { Component } from 'react';

//import './parktitle.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class ParkTitle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="ParkTitle">
                <Row>
                    <Col>
                        <div className="name">{this.props.name}</div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>{this.props.designation}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>{this.props.state}</h4>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default ParkTitle;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION