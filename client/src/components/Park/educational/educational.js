import React, { Component } from 'react';
import Lesson from './lesson.js';
import Item from './item.js';
import styles from './educational.module.css';
class Educational extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.places)
  }
  render() {
    const scope = {
      none: {
        "font-size": "48px",
        "text-align": "center",
        "margin-top": "100px",
        "font-weight": "800"

      }
    }
    if (this.props.educational.length == 0) {

      return (
        <div className="educational">
          <div style={scope.none}>
            There are no Lesson Plans at this time
          </div>
          <div className={styles.header}>People</div>
          <div className={styles.items}>
            {this.props.people.length != 0 ? this.props.people.map(person => <Item title={person.title} description={person.listingdescription} image={person.listingimage.url} url={person.url} />) :
              <div style={scope.none}>
                There are no associated people at this time
                </div>}

          </div>
          <div className={styles.header}>Places</div>
          <div className={styles.items}>
            {this.props.places.length != 0 ? this.props.places.map(place => <Item title={place.title} description={place.listingdescription} image={place.listingimage.url} url={place.url} />) :
              <div style={scope.none}>
                There are no associated places at this time
              </div>}
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="educational">
          {this.props.educational.map(lesson => <Lesson title={lesson.title} duration={lesson.duration} grade={lesson.gradelevel}
            subject={lesson.subject} url={lesson.url} description={lesson.questionobjective} />)}
          <div className={styles.header}>People</div>
          <div className={styles.items}>
            {this.props.people.length != 0 ? this.props.people.map(person => <Item title={person.title} description={person.listingdescription} image={person.listingimage.url} url={person.url} />) :
              <div style={scope.none}>
                There are no Lesson Plans at this time
                </div>}

          </div>
          <div className={styles.header}>Places</div>
          <div className={styles.items}>
            {this.props.places.length != 0 ? this.props.places.map(place => <Item title={place.title} description={place.listingdescription} image={place.listingimage.url} url={place.url} />) :
              <div style={scope.none}>
                There are no Lesson Plans at this time
              </div>}
          </div>
        </div>
      );
    }
  }
}

export default Educational;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION