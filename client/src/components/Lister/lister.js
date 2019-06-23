//Search Results View, responsible for API calls to backend when a search is "fired", displays loading and then results as necessary

import React, { Component } from 'react';

import styles from './lister.module.css';

//Bootstrap imports
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

//Component imports
import ParkItem from './parkitem.js';
import SearchHeader from './searchheader';

const axios = require('axios');


class Lister extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        query: { limit: 100, fields: "images,addresses", api_key: process.env.API_KEY }, //query object which serves as parameters for the API
        designations: null,
        items: null
    };

    componentDidMount() {

        //check for designation filtering

        if (this.props.location.state.designations === undefined || this.props.location.state.designations.length == 0) {
            // array empty or does not exist
        }
        else {
            this.state.designations = this.props.location.state.designations;
        }

        //check for query filtering

        if (this.props.location.state.query === null || this.props.location.state.query == "") {

        }
        else {
            this.state.query["q"] = this.props.location.state.query;
        }


        this.state.query["stateCode"] = this.props.location.state.location;


        this.callSearch()
            .then(res => {
                let results = res.data
                if (this.state.designations != null) {
                    let modified = []
                    results.forEach(item => {
                        if (this.state.designations.includes(item.designation) == true) {
                            modified.push(item);
                        }
                    });
                    results = modified;
                }

                this.setState({ items: results })
                console.log(this.state.items)
            })
            .catch(err => console.log(err));
    }

    callSearch = () => {
        return axios.get("/api/search", { params: this.state.query })
            .then(function (response) {
                // handle success
                //console.log(response.data.data);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                //
            });;
    };

    render() {
        //Loading

        if (this.state.items == null) {
            return (
                <div className={styles.spinnerwrapper}>
                    <Spinner className={styles.spinner} animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )
        } else {
            if (this.state.items.length == 0) {
                return (
                    <div className="listings">
                        <Container>
                            <SearchHeader
                                query={this.state.query.q == null ? null : this.state.query.q}
                                state={this.props.location.state.location == null ? null : this.props.location.state.location}
                                designation={this.state.designations == null ? null : this.state.designations} />
                            <div className={styles.noresults}>No results: Search again</div>

                        </Container>
                    </div>
                )
            }
            else {
                return (
                    <div className="listings">
                        <Container>
                            <SearchHeader
                                query={this.state.query.q == null ? null : this.state.query.q}
                                state={this.props.location.state.location == null ? null : this.props.location.state.location}
                                designation={this.state.designations == null ? null : this.state.designations} />
                            <Row>
                                <Col>
                                    {this.state.items.slice(0, this.state.items.length / 2).map(item => <ParkItem
                                        name={item.fullName}
                                        designation={item.designation}
                                        address={item.addresses == null ? null : item.addresses.find((address) => {
                                            return address.type == "Physical";
                                        })}
                                        code={item.parkCode}
                                        image={(item.images[0] == null ? null : item.images[0].url)}
                                    />)}
                                </Col>
                                <Col>
                                    {this.state.items.slice(this.state.items.length / 2, this.state.items.length).map(item => <ParkItem
                                        name={item.fullName}
                                        designation={item.designation}
                                        address={item.addresses == null ? null : item.addresses.find((address) => {
                                            return address.type == "Physical";
                                        })}
                                        code={item.parkCode}
                                        image={(item.images[0] == null ? null : item.images[0].url)}
                                    />)}
                                </Col>
                            </Row>

                        </Container>
                    </div>
                );

            }

        }

    }
}

export default Lister;