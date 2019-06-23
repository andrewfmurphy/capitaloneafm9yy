//Header for park view, contains name, state, latitude and longitude with map visualizations via the icon

import React, { Component } from 'react';

import styles from './parktitle.module.css';

//Bootstrap imports
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//Component imports
import SimpleMap from '../../maps/maps.js';

//Icons
import map from '../../resources/map.svg';

import {Link} from 'react-router-dom';


class ParkTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lgShow: false
        }
    }
    render() {

        //Modal logic
        let lgClose = () => this.setState({ lgShow: false });
        return (

            <div className={styles.parktitle}>
                <Row>
                    <Col>
                        <div className={styles.name}>{this.props.name}</div>
                    </Col>
                    <Col xs={2}>
                        <Link className={styles.link} to={"/"}>
                            <Button variant="outline-danger" type="submit">
                                Search
                        </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.designator}>{this.props.designation}</div>
                    </Col>
                    <Col xs={4} onClick={() => this.setState({ lgShow: true })}>
                        <div className={styles.lat}>{this.props.latlong.substring(this.props.latlong.search(":") + 1, this.props.latlong.search(","))}&#176;N {"  "}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.designator}>{this.props.state.replace(/[,]/g, ", ")}</div>

                    </Col>
                    <Col xs={4} onClick={() => this.setState({ lgShow: true })}>
                        <div className={styles.latlong}>{this.props.latlong.substring(this.props.latlong.search(",") + 8, this.props.latlong.length)}&#176;W{" "}
                        <img onClick={() => this.setState({ lgShow: true })} src={map} height="10px" width="10px"></img></div>
                    </Col>
                </Row>
                <Modal
                    size="lg"
                    show={this.state.lgShow}
                    onHide={lgClose}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            {this.props.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.latlong != "" ? <SimpleMap lat={this.props.latlong.substring(this.props.latlong.search(":") + 1, this.props.latlong.search(","))}
                            long={this.props.latlong.substring(this.props.latlong.search(",") + 7, this.props.latlong.length)} /> : "No coordinate data available"}
                    </Modal.Body>
                </Modal>
                <hr className={styles.divider}></hr>

            </div>

        );
    }
}

export default ParkTitle;