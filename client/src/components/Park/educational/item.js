import React, { Component } from 'react';
import styles from './item.module.css';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.item}>
                <div className={styles.title}><a href={this.props.url} className={styles.link}>{this.props.title}</a></div>
                <img className={styles.image} src={this.props.image}></img>
                <div className={styles.description}>{this.props.description}</div>


                {/* <div className={styles.url}>{this.props.url}</div> */}
            </div>
        );
    }
}

export default Item;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION