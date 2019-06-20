import React, { Component } from 'react';
import styles from './event.module.css';
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
        let close = () => this.setState({ show: false });
        return (
            <div className={styles.event}>
                <div className={styles.title}>{this.props.event.title}</div>
                <div className={styles.description}>{this.props.event.description.replace(/\<p\>/g, "").replace(/\<\/p\>/g, "").replace(/\<br \/>/g, "")}</div>
                <div className={styles.date}>{this.props.event.date}</div>
                <div className={styles.time}>{this.props.event.times[0].sunrisestart == "false" ? this.props.event.times[0].timestart : "Sunrise"} | {this
                    .props.event.times[0].sunsetend == "false" ? this.props.event.times[0].timeend : "Sunset"} </div>


                <Button variant="primary" onClick={() => this.setState({ show: true })}>
                    {this.props.event.title}
                    </Button>

                <Modal
                    show={this.state.show}
                    onHide={close}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Details
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={styles.details}>
                            <div className={styles.category}>{this.props.event.category}</div>
                            <div className={styles.fee}>{this.props.event.feeinfo}</div>
                            <div className={styles.location}>{this.props.event.location}</div>
                            <div className={styles.dates}>{this.props.event.dates.slice(0, 10).map(x => x)}</div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Event;

/*category: "Regular Event"

categoryid: "0"

contactemailaddress: ""

contactname: ""

contacttelephonenumber: ""

createuser: ""

date: "2019-06-20"

dateend: "2019-06-20"

dates: Array(18) [ "2019-06-20", "2019-06-22", "2019-06-23", … ]

datestart: "2019-06-20"

datetimecreated: ""

datetimeupdated: ""

description: "<p>Join a Ranger for a national park tradition, and take a look at the natural and cultural history of Shenandoah. Check visitor centers for topics. Dress for cool mountain nights.<br />Big Meadows Amphitheater (mile 51)<br />45 minutes.</p>"

eventid: "0"

feeinfo: "Free with park admission."

id: "F2B34761-BCF7-F4FA-23D430EA4FB60B62"

imageidlist: ""

images: Array []

infourl: ""

isallday: "false"

isfree: "true"

isrecurring: "true"

isregresrequired: "false"

latitude: "38.531000"

location: "Big Meadows Amphitheater (mile 51)"

longitude: "-78.439530"

organizationname: ""

parkfullname: "Shenandoah National Park"

portalname: ""

recurrencedateend: "2019-09-02"

recurrencedatestart: "2019-05-25"

recurrencerule: "DTSTART=20190525T040000Z;UNTIL=20190902T040000Z;FREQ=WEEKLY;WKST=SU;BYDAY=SU,TU,TH,SA;COUNT=0;INTERVAL=1"

regresinfo: ""

regresurl: ""

sitecode: "shen"

sitetype: "park"

subjectname: ""

tags: Array(3) [ "evening program", "ranger program", "Ranger Talk" ]

timeinfo: ""

times: Array [ {…} ]

title: "Big Meadows Evening Program"

types: (1) [… */