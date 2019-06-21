import React, { Component } from 'react';
import styles from './images.module.css';

class Images extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="images">
                {this.props.images.map(image =>
                    <div className={styles.image}>
                        <div className={styles.title}>
                            {image.title}
                        </div>
                        <img src={image.url} alt={image.altText} className={styles.img} />
                        <div className={styles.subheading}>
                            {image.caption}
                        </div>
                        <div className={styles.subheading}>
                            {image.credit}
                        </div>
                    </div>)}
            </div>
        );
    }
}

export default Images;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION