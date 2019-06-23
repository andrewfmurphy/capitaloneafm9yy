//Component for event listings

import React, { Component } from 'react';

import styles from './event.module.css';

//Bootstrap imports
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    render() {

        //Modal logic
        let close = () => this.setState({ show: false });
        return (
            <div className={styles.event}>
                <div className={styles.date}>{this.props.event.date}</div>
                <div className={styles.time}>{this.props.event.times[0].sunrisestart == "false" ? this.props.event.times[0].timestart : "Sunrise"} | {this
                    .props.event.times[0].sunsetend == "false" ? this.props.event.times[0].timeend : "Sunset"} </div>
                <div className={styles.title}>
                    {this.props.event.title}
                </div>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: this.props.event.description }}></div>
                <Button className={styles.button} variant="outline-secondary" onClick={() => this.setState({ show: true })}>
                    Additional Info
                </Button>



                <Modal
                    show={this.state.show}
                    onHide={close}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Additional Info
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={styles.details}>
                            <div className={styles.header}>Fees</div>
                            {this.props.event.feeinfo != "" ? <div className={styles.fee}>{this.props.event.feeinfo}</div> : <div className={styles.fee}>This event is free.</div>}
                            <div className={styles.header}>Location</div>
                            <div className={styles.location}>{this.props.event.location}</div>
                            <div className={styles.header}>Additional Dates</div>
                            <div className={styles.dates}>{this.props.event.dates.slice(0, 10).map(x => <div>{x}</div>)}</div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Event;