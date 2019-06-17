import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

class PricingHours extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pricinghours">



                <Tab.Container defaultActiveKey="prices">
                    <Row>
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="prices">Fees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="hours">Hours</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                    <Row>

                        <Tab.Content>
                            <Tab.Pane eventKey="prices">
                                {this.props.fees.map(item => <Row className="fee"><Col md={3} className="price">
                                    {"$" + parseFloat(item.cost)}</Col> <Col className="description"><span className="descriptionspan">{item.title}</span></Col> </Row>)}
                                {this.props.passes.length > 0 && <div className="header">Passes</div>}
                                {this.props.passes.map(item => <Row className="pass"><Col md={3} className="price">
                                    {"$" + parseFloat(item.cost)}</Col> <Col className="description"><span className="descriptionspan">{item.title}</span></Col> </Row>)}                            </Tab.Pane>
                            <Tab.Pane eventKey="hours">
                                {this.props.hours.map(item => <div className="hours"><span className="title">{item.name}</span> <div className="day">Monday:
                                 <span className="dayspan">{item.standardHours.monday}</span></div>
                                    <div className="day">Tuesday: <span className="dayspan">{item.standardHours.tuesday}</span></div>
                                     <div className="day">Wednesday: <span className="dayspan">{item.standardHours.wednesday}</span></div>
                                    <div className="day">Thursday: <span className="dayspan">{item.standardHours.thursday}</span></div>
                                    <div className="day">Friday: <span className="dayspan">{item.standardHours.friday}</span></div>
                                    <div className="day">Saturday: <span className="dayspan">{item.standardHours.saturday}</span></div>
                                    <div className="day">Sunday: <span className="dayspan">{item.standardHours.sunday}</span></div>
                                    <span className="descriptionspan">{item.description} </span> </div>)}
                            </Tab.Pane>
                        </Tab.Content>

                    </Row>
                </Tab.Container>
            </div>

        );
    }
}

export default PricingHours;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION