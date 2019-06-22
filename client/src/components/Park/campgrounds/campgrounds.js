import React, { Component } from 'react';
import Campground from './campground.js'


class Campgrounds extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const scope = {
            none: {
                "font-size": "48px",
                "text-align": "center",
                "margin-top": "200px",
                "font-weight": "800"

            }
        }
        if (this.props.campgrounds.length == 0) {

            return (
                <div style={scope.none}>
                    There are no Campgrounds at this time
                </div>
            )
        }
        else {
            return (
                <div className="campgroundlist">
                    {this.props.campgrounds.map(cg => <Campground name={cg.name} description={cg.description} campsites={cg.campsites} accessibility={cg.accessibility}
                        directions={cg.directionsoverview} amenities={cg.amenities} url={cg.regulationsurl} regulations={cg.regulationsoverview} latlong={cg.latLong} />)}
                </div>
            );
        }
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
