//Individual listing for a lesson plan

import React, { Component } from 'react';

import styles from './lesson.module.css';

//Icon
import externallink from '../../resources/external-link.svg';


class Lesson extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.lesson}>
                <div className={styles.title}><a href={this.props.url} className={styles.link}>{this.props.title} <img src={externallink} height="10px" width="10px"></img></a></div>
                <div className={styles.description}>{this.props.description}</div>
                <div>
                    <span className={styles.duration}>{this.props.duration} | </span>
                    <span className={styles.subject}>{this.props.subject} | </span>
                    <span className={styles.grade}>{this.props.grade}</span>
                </div>
            </div>
        );
    }
}

export default Lesson;