import React, { Component } from 'react';
import './lister.css';
//import Panel from './panel.js';
import ParkItem from './parkitem.js';
import CardColumns from 'react-bootstrap/CardColumns';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import queryString from 'query-string';

const axios = require('axios');

class Lister extends Component {
    state = {
        query: { fields: "images", api_key: process.env.API_KEY },
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
            return (<div className="Park">Loading</div>)
        } else {
            if (this.state.items.length == 0) {
                return (
                    <div className="Lister">NO RESULTS</div>
                )
            }
            else {
                return (
                    <div className="ParkItem">
                        <Container>
                            <CardColumns>
                                {this.state.items.map(item => <ParkItem name={item.fullName} designation={item.designation} code={item.parkCode} image={(item.images[0] == null ? "None" : item.images[0].url)} />)}
                            </CardColumns>
                        </Container>
                    </div>
                );
    
            }
           
        }

    }
}

export default Lister;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION