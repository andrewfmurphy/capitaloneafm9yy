import React, { Component } from 'react';
import Campground from './campground.js'


class Campgrounds extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="campgroundlist">
                {this.props.campgrounds.map(cg => <Campground name={cg.name} description={cg.description} campsites={cg.campsites} accessibility ={cg.accessibility}
                directions={cg.directionsoverview} amenities={cg.amenities} url={cg.regulationsurl} regulations={cg.regulationsoverview}/>)}
            </div>
        );
    }
}

export default Campgrounds;

//regulations url weatheroverview campsites accessibility
//directions
//reservations
//name
//regulationsoverview
//description
//amenities
