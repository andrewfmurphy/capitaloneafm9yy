import React, { Component } from 'react';


class Lesson extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="lesson">
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
        <div>{this.props.duration}</div>
        <div>{this.props.grade}</div>
        <div>{this.props.subject}</div>
        <div>{this.props.url}</div>
        </div>
      );
    }
  }

export default Lesson;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION