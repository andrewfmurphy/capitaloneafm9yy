import React, { Component } from 'react';
import Lesson from './lesson.js';
import Item from './item.js';
import styles from './educational.module.css';
class Educational extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="educational">
        {this.props.educational.map(lesson => <Lesson title={lesson.title} duration={lesson.duration} grade={lesson.gradelevel}
          subject={lesson.subject} url={lesson.url} description={lesson.questionobjective} />)}
        <div className={styles.header}>People</div>
        <div className={styles.items}>
          {this.props.people.map(person => <Item title={person.title} description={person.listingdescription} image={person.listingimage.url} url={person.url} />)}
        </div>
        <div className={styles.header}>Places</div>
        <div className={styles.items}>
          {this.props.places.map(place => <Item title={place.title} description={place.listingdescription} image={place.listingimage.url} url={place.url} />)}
        </div>
      </div>
    );
  }
}

export default Educational;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION