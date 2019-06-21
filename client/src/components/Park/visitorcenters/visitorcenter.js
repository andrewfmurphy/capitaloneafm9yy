import React, { Component } from 'react';
import styles from './visitorcenter.module.css';

class VisitorCenter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className={styles.center}>
        <div className={styles.name}><a className={styles.link} href={this.props.url}>{this.props.name}</a></div>
        <div className={styles.description}>{this.props.description}</div>
        <div className={styles.directions}>{this.props.directions}</div>
        </div>
      );
    }
  }

export default VisitorCenter;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION