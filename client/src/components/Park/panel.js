import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Panel extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="Panel">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to={this.props.path}>Main</Link></Nav.Link>
                                <Nav.Link><Link to={this.props.path + "/alerts"}>Alerts</Link></Nav.Link>
                                <Nav.Link><Link to={this.props.path + "/campgrounds"}>Campgrounds</Link></Nav.Link>
                                <Nav.Link><Link to={this.props.path + "/visitorcenters"}>Visitor Centers</Link></Nav.Link>
                                <Nav.Link><Link to={this.props.path + "/educational"}>Educational</Link></Nav.Link>
                                <Nav.Link><Link to={this.props.path + "/events"}>Events</Link></Nav.Link>
                                <Nav.Link><Link to={this.props.path + "/events"}>Media</Link></Nav.Link>


                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search"/>
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Panel;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION