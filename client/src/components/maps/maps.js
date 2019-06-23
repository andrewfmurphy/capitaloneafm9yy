//Handles map visualization using google-map-react

import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import Marker from './marker.js';

class SimpleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: parseFloat(this.props.lat),
                lng: parseFloat(this.props.long)
            }
        }
        //Handles conversions for longitude if it's accidentally positive
        if (this.state.center.lng>0) {
            this.state.center.lng = this.state.center.lng * -1;
        }
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 16
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;