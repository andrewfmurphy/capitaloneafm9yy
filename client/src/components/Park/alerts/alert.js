import React, { Component } from 'react';
import styles from './alert.module.css';
class Alert extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className={styles.alert}>
          <div className={styles.category}>{this.props.category}</div>
          <div className={styles.title}><a href={this.props.url}><span className={styles.titlewrapper}>{this.props.title}</span></a></div>
          <div className={styles.description}>{this.props.description}</div>
          
          </div>
      );
    }
  }

export default Alert;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION