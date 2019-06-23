import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.js';
class SimpleMap extends Component {
    constructor(props) {
        super(props);
        console.log(process.env.GOOGLE_MAPS);
        this.state = {
            center: {
                lat: parseFloat(this.props.lat),
                lng: parseFloat(this.props.long)
            }
        }
        console.log(this.state.center);
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
                        lat={this.props.lat}
                        lng={this.props.long}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;