//Component that displays both pricing information and hours of operation

import React, { Component } from 'react';

import styles from './pricinghours.module.css'

//Bootstrap imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class PricingHours extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.pricinghours}>



                <Tab.Container defaultActiveKey="prices">
                    <Row>

                        <Nav.Link bsPrefix={styles.header} eventKey="prices">Fees</Nav.Link>


                        <Nav.Link bsPrefix={styles.header} eventKey="hours">Hours</Nav.Link>

                    </Row>
                    <Row>

                        <Tab.Content className={styles.contentpane}>
                            <Tab.Pane eventKey="prices">
                                {this.props.fees.map(item => <Row className={styles.fee}><Col md={3} className={styles.price}>
                                    {"$" + parseFloat(item.cost)}</Col> <Col className={styles.descriptionspan}>{item.title}</Col> </Row>)}
                                {this.props.passes.length > 0 && <div className={styles.passheader}>Passes</div>}
                                {this.props.passes.map(item => <Row className={styles.pass}><Col md={3} className={styles.price}>
                                    {"$" + parseFloat(item.cost)}</Col> <Col className={styles.descriptionspan}>{item.title}</Col></Row>)}                            </Tab.Pane>
                            <Tab.Pane eventKey="hours">
                                {this.props.hours.map(item =>
                                    <Container bsPrefix={styles.hours}>
                                        <Row className={styles.title}><Col className="title">{item.name}</Col></Row>
                                        <Row>
                                            <Col className={styles.day}>Monday: </Col>
                                            <Col><span className={styles.dayspan}>{item.standardHours.monday}</span></Col>
                                        </Row>
                                        <Row>
                                            <Col className={styles.day}>Tuesday: </Col>
                                            <Col><span className={styles.dayspan}>{item.standardHours.tuesday}</span></Col>
                                        </Row>
                                        <Row>
                                            <Col className={styles.day}>Wednesday: </Col>
                                            <Col><span className={styles.dayspan}>{item.standardHours.wednesday}</span></Col>
                                        </Row>
                                        <Row>
                                            <Col className={styles.day}>Thursday: </Col>
                                            <Col><span className={styles.dayspan}>{item.standardHours.thursday}</span></Col>
                                        </Row>
                                        <Row>
                                            <Col className={styles.day}>Friday: </Col>
                                            <Col><span className={styles.dayspan}>{item.standardHours.friday}</span></Col>
                                        </Row>
                                        <Row>
                                            <Col className={styles.day}>Saturday: </Col>
                                            <Col><span className={styles.dayspan}>{item.standardHours.saturday}</span></Col>
                                        </Row>
                                        <Row>
                                            <Col className={styles.day}>Sunday: </Col>
                                            <Col><span className={styles.dayspan}>{item.standardHours.sunday}</span></Col>
                                        </Row>
                                        <div className={styles.descriptionhoursspan}>{item.description}
                                        </div>
                                    </Container>)}
                            </Tab.Pane>
                        </Tab.Content>

                    </Row>
                </Tab.Container>
            </div>

        );
    }
}

export default PricingHours;