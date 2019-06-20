import React, { Component } from 'react';
import Lesson from './lesson.js';

class Educational extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className="educational">
          {this.props.educational.map(lesson => <Lesson title={lesson.title} duration={lesson.duration} grade={lesson.gradelevel}
           subject={lesson.subject} url={lesson.url} description={lesson.questionobjective}/>)}
          </div>
      );
    }
  }

export default Educational;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION