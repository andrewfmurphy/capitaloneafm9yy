import React, { Component } from 'react';
import './main.css';
import Panel from '../Park/panel.js';
import Typed from 'typed.js';

import Jumbotron from 'react-bootstrap/Jumbotron';
import SearchForm from './searchform.js';


const axios = require('axios');




class Main extends Component {

    componentDidMount() {

        const options = {
            strings: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
                'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
                'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
                'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
                'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
                'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ],
            typeSpeed: 40,
            backSpeed: 50,
            backDelay: 1200,
            startDelay: 600,
            loop: true,
            shuffle: true
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }


    render() {
        return (
            <div className="main">


                <Jumbotron>
                    <div className="typing" align="center">
                        EXPLORE <span
                            style={{ whiteSpace: 'pre' }}
                            ref={(el) => { this.el = el; }}
                        />
                    </div>

                </Jumbotron>

                    <SearchForm />

            </div>


        );
    }
}

export default Main;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION