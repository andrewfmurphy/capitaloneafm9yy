//Main page and search screen

import React, { Component } from 'react';

import styles from './main.module.css';

//Bootstrap imports
import Container from 'react-bootstrap/Container';

//Component imports
import SearchForm from './searchform.js';

import Typed from 'typed.js';

class Main extends Component {
    constructor(props) {
        super(props)

    }


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
            <div className={styles.main}>

                <Container className={styles.maincontainer}>
                    <div className={styles.typing} align="center">
                        EXPLORE <span
                            style={{ whiteSpace: 'pre' }}
                            ref={(el) => { this.el = el; }}
                        />
                    </div>
                </Container>

                <SearchForm className={styles.searchform}/>

            </div>


        );
    }
}

export default Main;