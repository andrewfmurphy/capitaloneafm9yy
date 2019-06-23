//Navbar for park view, contains links to each park page

import React, { Component } from 'react';

import styles from './panel.module.css';

//Bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Panel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={styles.panel}>
                <Navbar expand="false">
                    <Navbar.Brand bsPrefix={styles.subheading}>{this.props.titles[this.props.title]}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="text-right">
                        <Nav className={styles.menu}>
                            <Nav className={styles.menuitem}><Link to={this.props.path}>Main</Link></Nav>
                            <Nav className={styles.menuitem}><Link to={this.props.path + "/generalinfo"}>General Info</Link></Nav>
                            <Nav className={styles.menuitem}><Link to={this.props.path + "/alerts"}>Alerts</Link></Nav>
                            <Nav className={styles.menuitem}><Link to={this.props.path + "/campgrounds"}>Campgrounds</Link></Nav>
                            <Nav className={styles.menuitem}><Link to={this.props.path + "/visitorcenters"}>Visitor Centers</Link></Nav>
                            <Nav className={styles.menuitem}><Link to={this.props.path + "/images"}>Images</Link></Nav>
                            <Nav className={styles.menuitem}><Link to={this.props.path + "/educational"}>Educational</Link></Nav>
                            <Nav className={styles.menuitem}><Link to={this.props.path + "/events"}>Events</Link></Nav>
                            <Nav className={styles.menuitem}><Link to={this.props.path + "/media"}>Media</Link></Nav>
                            <Nav className={styles.menuitem}><Link to={this.props.path + "/newsreleases"}>News Releases</Link></Nav>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
            </div>
        );
    }
}

export default Panel;