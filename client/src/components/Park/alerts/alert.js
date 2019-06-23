//Component for individual alert listings

import React, { Component } from 'react';

import styles from './alert.module.css';

import externallink from '../../resources/external-link.svg';

class Alert extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className={styles.alert}>
          <div className={styles.category}>{this.props.category}</div>
          <div className={styles.title}><a href={this.props.url}><span className={styles.titlewrapper}>{this.props.title}</span> <img src={externallink} height="10px" width="10px"></img></a></div>
          <div className={styles.description}>{this.props.description}</div>
          
          </div>
      );
    }
  }

export default Alert;