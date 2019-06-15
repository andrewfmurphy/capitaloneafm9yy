import React, { Component } from 'react';
//import './park.css';
import ParkTitle from './parktitle.js';
import ParkContent from './parkcontent.js';
import Alerts from './alerts.js';

const axios = require('axios');

class Park extends Component {
  state = {
    park: null,
    alerts: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callParkInfo()
      .then(res => {
        console.log(res.data[0]); this.setState({ park: res.data[0] })
      })
      .catch(err => console.log(err));
    this.callAlertInfo()
      .then(res => {
        console.log(res.data); this.setState({ alerts: res.data })
      })
      .catch(err => console.log(err));
  }
  //Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callParkInfo = () => {
    return axios.get("/api/parks", { params: { parkCode: "grca", api_key: process.env.API_KEY } })
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

  callAlertInfo = () => {
    return axios.get("/api/alerts", { params: { parkCode: "grca", api_key: process.env.API_KEY } })
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
    if (this.state.alerts == null) {
      return (<div className="Park">Loading</div>)
    } else {
      return (
        <div className="Park">
          {/* <Header /> */}
          <ParkTitle name={this.state.park.fullName} designation={this.state.park.designation} state={this.state.park.states} />
          <Alerts content={this.state.alerts}/>
          <ParkContent description={this.state.park.description} directions={this.state.park.directions} weather={this.state.park.weatherInfo} />
          This is a park
            </div>
      );

    }

  }
}

export default Park;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION