//Individual listing for both people and places

import React, { Component } from 'react';

import styles from './item.module.css';

//Icon
import externallink from '../../resources/external-link.svg';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.item}>
                <div className={styles.title}><a href={this.props.url} className={styles.link}>{this.props.title}  <img src={externallink} height="10px" width="10px"></img></a></div>
                <img className={styles.image} src={this.props.image}></img>
                <div className={styles.description}>{this.props.description}</div>

            </div>
        );
    }
}

export default Item;