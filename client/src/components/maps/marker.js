//Marker component for the map

import React, { Component } from 'react';

import marker from '../resources/marker.svg';

class Marker extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="marker">
               <img src={marker} height="50px" width="50px"></img>
            </div>
        );
    }
}

export default Marker;