import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

import styles from './searchform.module.css';

class SearchForm extends Component {
        constructor(props) {
                super(props);
                this.state = { location: 'national', designations: [], query: null};

                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.state.search = false;
        }

        handleChange(event) {

                
                if (event.target.type == "checkbox") {
                        if (event.target.checked && this.state.designations.includes(event.target.value) == false) {
                                this.state.designations.push(event.target.value)
                        }

                        if (event.target.checked == false && this.state.designations.includes(event.target.value) == true) {
                                this.state.designations.splice(this.state.designations.findIndex((x) => { return event.target.value == x }), 1);
                        }
                }

                else if (event.target.type == "text") {
                        if (event.target.value == "") {
                                this.state.query = null;
                        }

                        else {
                                this.state.query = event.target.value;
                        }
                }
                else {
                        this.state.location = event.target.value;
                }

        }

        handleSubmit(event) {
                event.preventDefault();
                this.setState({
                        search: true
                });
        }




        render() {
                if (this.state.search) {
                        console.log(this.state.location + this.state.designations + this.state.query);
                        return <Redirect
                                to={{
                                        pathname: "/search",
                                        state: { location: this.state.location, designations: this.state.designations, query: this.state.query}
                                }}
                        />

                }
                else {
                        return (
                                <Container className={styles.searchform}>
                                        <Row className={styles.statebar}>
                                                <Col className={styles.label} xs={3}>
                                                
                                                </Col>
                                                <Col xs={6}>
                                                        < Form.Control as="select"
                                                                onChange={this.handleChange}
                                                                inputProps={{
                                                                        name: 'age',
                                                                        id: 'age-simple',
                                                                }
                                                                }
                                                        >

                                                                <option value="national">National
                        </option>
                                                                <option value="AL">Alabama
                        </option>
                                                                <option value="AK">Alaska
                        </option>
                                                                <option value="AZ">Arizona
                        </option>
                                                                <option value="AR">Arkansas
                        </option>
                                                                <option value="CA">California
                        </option>

                                                                <option value="CO">Colorado
                        </option>
                                                                <option value="CT">Connecticut
                        </option>
                                                                <option value="DE">Delaware
                        </option>
                                                                <option value="DC">District of Columbia
                        </option>
                                                                <option value="FL">Florida
                        </option>
                                                                <option value="GA">Georgia
                        </option>

                                                                <option value="HI">Hawaii
                        </option>
                                                                <option value="ID">Idaho
                        </option>
                                                                <option value="IL">Illinois
                        </option>
                                                                <option value="IN">Indiana
                        </option>
                                                                <option value="IA">Iowa
                        </option>

                                                                <option value="KS">Kansas
                        </option>
                                                                <option value="KY">Kentucky
                        </option>
                                                                <option value="LA">Louisiana
                        </option>
                                                                <option value="ME">Maine
                        </option>
                                                                <option value="MD">Maryland
                        </option>

                                                                <option value="MA">Massachusetts
                        </option>
                                                                <option value="MI">Michigan
                        </option>
                                                                <option value="MN">Minnesota
                        </option>
                                                                <option value="MS">Mississippi
                        </option>
                                                                <option value="MO">Missouri
                        </option>

                                                                <option value="MT">Montana
                        </option>
                                                                <option value="NE">Nebraska
                        </option>
                                                                <option value="NV">Nevada
                        </option>
                                                                <option value="NH">New Hampshire
                        </option>
                                                                <option value="NJ">New Jersey
                        </option>

                                                                <option value="NM">New Mexico
                        </option>
                                                                <option value="NY">New York
                        </option>
                                                                <option value="NC">North Carolina
                        </option>
                                                                <option value="ND">North Dakota
                        </option>
                                                                <option value="OH">Ohio
                        </option>

                                                                <option value="OK">Oklahoma
                        </option>
                                                                <option value="OR">Oregon
                        </option>
                                                                <option value="PA">Pennsylvania
                        </option>
                                                                <option value="RI">Rhode Island
                        </option>
                                                                <option value="SC">South Carolina
                        </option>

                                                                <option value="SD">South Dakota
                        </option>
                                                                <option value="TN">Tennessee
                        </option>
                                                                <option value="TX">Texas
                        </option>
                                                                <option value="UT">Utah
                        </option>
                                                                <option value="VT">Vermont
                        </option>

                                                                <option value="VA">Virginia
                        </option>
                                                                <option value="WA">Washington
                        </option>
                                                                <option value="WV">West Virginia
                        </option>
                                                                <option value="WI">Wisconsin
                        </option>
                                                                <option value="WY">Wyoming
                        </option>

                                                        </ Form.Control>
                                                </Col>
                                        </Row>
                                        <Row className={styles.searchbar}>
                                                <Col className={styles.label} xs={3}>
                                                
                                                </Col>
                                                <Col lg={6}>
                                                        <Form.Control type="text" placeholder="optional" onChange={this.handleChange}/>

                                                </Col>
                                                <Col>

                                                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                                                Search
                            </Button>
                                                </Col>
                                        </Row>
                                        <Row>
                                                <Col></Col>
                                                <Col xs="3" >

                                                        {['National Park', 'National Monument', 'National Preserve', 'National Historic Site',
                                                                'National Historic Park', 'National Memorial', 'National Battlefield'].map(name => (
                                                                        <Form.Check
                                                                                type="checkbox"
                                                                                onChange={this.handleChange}
                                                                                value={name}
                                                                                label={`${name}`}
                                                                        />

                                                                ))}


                                                </Col>
                                                <Col xs="3">
                                                        {['National Cemetary', 'National Recreation Area',
                                                                'National Seashore', 'National Lakeshore', 'National River', 'National Parkway', 'National Trail'].map(name => (

                                                                        <Form.Check
                                                                                type="checkbox"
                                                                                onChange={this.handleChange}
                                                                                value={name}
                                                                                label={`${name}`}

                                                                        />))}
                                                </Col>
                                                <Col></Col>




                                        </Row>
                                </Container>
                        );
                }
        }
}

export default SearchForm;

                                //NAME, DESIGNATION, STATE LAT LONG DESCRIPTION


