import React, { Component } from 'react';
import styles from './lister.module.css';
//import Panel from './panel.js';
import ParkItem from './parkitem.js';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import queryString from 'query-string';
import SearchHeader from './searchheader';
import SearchForm from '../Main/searchform.js';
import Spinner from 'react-bootstrap/Spinner';

const axios = require('axios');

class Lister extends Component {
    constructor(props) {
        super(props)
        console.log('created');
    }
    state = {
        query: { fields: "images,addresses", api_key: process.env.API_KEY },
        designations: null,
        items: null
    };

    componentDidMount() {

        if (this.props.location.state.designations === undefined || this.props.location.state.designations.length == 0) {
            // array empty or does not exist
        }
        else {
            this.state.designations = this.props.location.state.designations;
        }

        if (this.props.location.state.query === null || this.props.location.state.query == "") {

        }
        else {
            this.state.query["q"] = this.props.location.state.query;
        }


        if (this.props.location.state.location == "national") {
            this.state.query["stateCode"] = "AL,AK,AZ,AR,CA,CO,CT,DC,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY"
        }
        else {
            this.state.query["stateCode"] = this.props.location.state.location;
        }


        this.callSearch()
            .then(res => {
                let results = res.data
                console.log(results);
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
        return axios.get("/api/parks", { params: this.state.query })
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

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION