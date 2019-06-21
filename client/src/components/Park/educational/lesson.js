import React, { Component } from 'react';
import styles from './lesson.module.css';

class Lesson extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.lesson}>
        <div className={styles.title}><a href={this.props.url} className={styles.link}>{this.props.title}</a></div>
        <div className={styles.description}>{this.props.description}</div>
        <div>
          <span className={styles.duration}>{this.props.duration} | </span>
          <span className={styles.subject}>{this.props.subject} | </span>
          <span className={styles.grade}>{this.props.grade}</span>
        </div>
        {/* <div className={styles.url}>{this.props.url}</div> */}
      </div>
    );
  }
}

export default Lesson;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION