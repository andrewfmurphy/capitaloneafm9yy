//View for images

import React, { Component } from 'react';

import styles from './images.module.css';

//Component imports
import ImgModal from './imgmodal.js';

class Images extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const scope = {
            none: {
                "font-size": "48px",
                "text-align": "center",
                "margin-top": "200px",
                "font-weight": "800"

            }
        }

        //No current images
        if (this.props.images.length == 0) {

            return (
                <div style={scope.none}>
                    There are no Images at this time
                </div>
            )
        }
        else {
            return (
                <div className="images">
                    {this.props.images.map(image =>
                        <div className={styles.image}>
                            <div className={styles.title}>
                                {image.title}
                            </div>
                            <ImgModal url={image.url} altText={image.altText} title={image.title} />
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
}

export default Images;