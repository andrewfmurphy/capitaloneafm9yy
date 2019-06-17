import React, { Component } from 'react';
import './css/App.css';
import Park from './components/Park/park.js';
import Lister from './components/Lister/lister.js';
import Main from './components/Main/main.js';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
      data: null
    };
  
    render() {
      return (
        <Router>
          <header className="App-header">
          </header>
          
          <div className="App">
          <Route exact path="/" component={Main} />
          <Route path="/park/:code" component={Park} />
          <Route path="/search" component={Lister} />
          </div>
        </Router>
        
      );
    }
  }

export default App;
