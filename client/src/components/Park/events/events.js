//View for events page

import React, { Component } from 'react';

//Component imports
import Event from './event.js';

class Events extends Component {
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
        //No current events
        if (this.props.events.length == 0) {

            return (
                <div style={scope.none}>
                    There are no Events at this time
            </div>
            )
        }
        else {
            return (
                <div className="events">
                    {this.props.events.map(event => <Event event={event} />)}
                </div>
            );
        }
    }
}

export default Events;
