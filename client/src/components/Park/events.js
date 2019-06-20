import React, { Component } from 'react';
import Event from './event.js';
class Events extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className="events">
          {this.props.events.map(event => <Event event={event} />)}
          </div>
      );
    }
  }

export default Events;
