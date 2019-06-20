import React, { Component } from 'react';
import styles from './article.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.article}>
                {this.props.img == "" ? null : <a href={this.props.url}><img className={styles.img} src={this.props.img}></img></a>}
                <div className={styles.title}><a href={this.props.url}>{this.props.title}</a></div>
                <div className={styles.description}>{this.props.description}</div>
            </div >
        );
    }
}

export default Article;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION