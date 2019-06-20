import React, { Component } from 'react';
import styles from './newsrelease.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class NewsRelease extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.newsrelease}>
                {this.props.img == "" ? null : <a href={this.props.url}><img className={styles.img} src={this.props.img}></img></a>}
                <div className={styles.title}><a href={this.props.url}>{this.props.title}</a></div>
                <div className={styles.description}>{this.props.abstract}</div>
                <div className={styles.date}>{this.props.date}</div>
            </div >
        );
    }
}

export default NewsRelease;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION