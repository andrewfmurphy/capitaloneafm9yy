//Component for image listings, supports "expansion" by clicking on the image

import React, { Component } from 'react';

import styles from './imgmodal.module.css';

//Bootstrap imports
import Modal from 'react-bootstrap/Modal';

class ImgModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lgShow: false
        }
    }
    render() {

        //Modal logic
        let lgClose = () => this.setState({ lgShow: false });
        return (
            <div className={styles.imgmodal}>
                <img src={this.props.url} alt={this.props.altText} className={styles.img} onClick={() => this.setState({ lgShow: true })} />
                <Modal
                    size="lg"
                    show={this.state.lgShow}
                    onHide={lgClose}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className={styles.largeimg} src={this.props.url}></img>
                    </Modal.Body>
                </Modal>
            </div>

        );
    }
}

export default ImgModal;