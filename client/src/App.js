import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Park from './components/Park/park.js';

const axios = require('axios');

class App extends Component {
  state = {
      data: null
    };
  
 /*   componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => {
          console.log('test'); this.setState({ data: res.total })})
        .catch(err => console.log(err));
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = () => {
      return axios.get("/api/state", { params: { stateCode: "VA", api_key: process.env.API_KEY } })
        .then(function (response) {
            // handle success
            console.log(response.data);
            return response.data;
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
          //
        });;
    };*/
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
          </header>
          <Park />
          <p className="App-intro">{this.state.data}</p>
        </div>
      );
    }
  }

export default App;
