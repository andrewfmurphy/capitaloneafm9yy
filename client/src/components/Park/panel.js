import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './panel.module.css';

class Panel extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className={styles.panel}>
                    <Navbar expand="false">
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="text-right">
                            <Nav className={styles.menu}>
                                <Nav className={styles.menuitem}><Link to={this.props.path}>Main</Link></Nav>
                                <Nav className={styles.menuitem}><Link to={this.props.path + "/alerts"}>Alerts</Link></Nav>
                                <Nav className={styles.menuitem}><Link to={this.props.path + "/campgrounds"}>Campgrounds</Link></Nav>
                                <Nav className={styles.menuitem}><Link to={this.props.path + "/visitorcenters"}>Visitor Centers</Link></Nav>
                                <Nav className={styles.menuitem}><Link to={this.props.path + "/educational"}>Educational</Link></Nav>
                                <Nav className={styles.menuitem}><Link to={this.props.path + "/events"}>Events</Link></Nav>
                                <Nav className={styles.menuitem}><Link to={this.props.path + "/events"}>Media</Link></Nav>

                            </Nav>
                            {/* <Form inline>
                                <FormControl type="text" placeholder="Search" />
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
                        </Navbar.Collapse>

                    </Navbar>
            </div>
        );
    }
}

export default Panel;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION