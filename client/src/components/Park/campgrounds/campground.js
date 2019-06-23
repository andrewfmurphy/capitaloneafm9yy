//Component for individual campground listing

import React, { Component } from 'react';

import styles from './campground.module.css';

//Bootstrap imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//Icons
import externallink from '../../resources/external-link.svg';
import map from '../../resources/map.svg';

//Component imports
import SimpleMap from '../../maps/maps.js';


class Campground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showa: false,
            showb: false,
            showc: false
        };
    }


    render() {

        //Modal logic
        let aclose = () => this.setState({ showa: false });
        let bclose = () => this.setState({ showb: false });
        let cclose = () => this.setState({ showc: false });

        return (
            <div className={styles.campground}>
                <div className={styles.name}>{this.props.url != "" ? <span><a className={styles.link} href={this.props.url}>{this.props.name + " "}
                    <img src={externallink} height="10px" width="10px"></img></a>{" "}
                    <img onClick={() => this.setState({ showc: true })} src={map} height="10px" width="10px"></img></span> :
                    <span>{this.props.name + " "} <img onClick={() => this.setState({ showc: true })} src={map} height="10px" width="10px"></img></span>}
                    <Button className={styles.button} variant="outline-secondary" onClick={() => this.setState({ showa: true })}>
                        Amenities
        </Button>
                    <Button className={styles.button} variant="outline-secondary" onClick={() => this.setState({ showb: true })}>
                        Accessibility
        </Button>

                </div>
                <Row>
                    <Col xs={6}>
                        <div className={styles.description}>{this.props.description}</div>
                    </Col>
                    <Col xs={2}>
                        <div className={styles.campsites}>
                            <div>Total Sites: {this.props.campsites["totalsites"]}</div>
                            <div>Tent Only: {this.props.campsites["tentonly"]}</div>
                            <div>RV Only: {this.props.campsites["rvonly"]}</div>
                            <div>Electrical Hookups: {this.props.campsites["electricalhookups"]}</div>
                            <div>Group Sites: {this.props.campsites.group}</div>
                            <div>Horse Sites: {this.props.campsites["horse"]}</div>
                            <div>Boat Access: {this.props.campsites["walkboatto"]}</div>
                            <div>Other: {this.props.campsites["other"]}</div>
                        </div>
                    </Col>
                    <Col xs={3}>
                    </Col>
                </Row>

                <Modal
                    show={this.state.showa}
                    onHide={aclose}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Amenities
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={styles.amenities}>
                            <div className={this.props.amenities.amphitheater == "" || this.props.amenities.amphitheater == "No" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Amphitheater: </span>{this.props.amenities.amphitheater == "" ? "No" : this.props.amenities.amphitheater}</div>
                            <div className={this.props.amenities.cellphonereception == "" || this.props.amenities.cellphonereception == "No" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Cellphone reception: </span>{this.props.amenities.cellphonereception == "" ? "No" : this.props.amenities.cellphonereception}</div>
                            <div className={this.props.amenities.dumpstation == "" || this.props.amenities.dumpstation == "No" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Dumpstation: </span>{this.props.amenities.dumpstation == "" ? "No" : this.props.amenities.dumpstation}</div>
                            <div className={this.props.amenities.firewoodforsale == "" || this.props.amenities.firewoodforsale == "No" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Firewood for sale: </span>{this.props.amenities.firewoodforsale == "" ? "No" : this.props.amenities.firewoodforsale}</div>
                            <div className={this.props.amenities.foodstoragelockers == "" || this.props.amenities.foodstoragelockers == "No" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Food storage lockers: </span>{this.props.amenities.foodstoragelockers == "" ? "No" : this.props.amenities.foodstoragelockers}</div>
                            <div className={this.props.amenities.iceavailableforsale == "" || this.props.amenities.iceavailableforsale == "No" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Ice for sale: </span>{this.props.amenities.iceavailableforsale == "" ? "No" : this.props.amenities.iceavailableforsale}</div>
                            <div className={this.props.amenities.internetconnectivity == "" || this.props.amenities.internetconnectivity == "No" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Internet connectivity: </span>{this.props.amenities.internetconnectivity == "" ? "No" : this.props.amenities.internetconnectivity}</div>
                            <div className={this.props.amenities.laundry == "" || this.props.amenities.laundry == "No" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Laundry: </span>{this.props.amenities.laundry == "" ? "No" : this.props.amenities.laundry}</div>
                            <div className={this.props.amenities.potablewater.length == 0 ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Potable water: </span>{this.props.amenities.potablewater.length == 0 ? "No" : this.props.amenities.potablewater.map(x => x)}</div>
                            <div className={this.props.amenities.showers.length == 0 || this.props.amenities.showers[0] == "None" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Showers: </span>{this.props.amenities.showers.length == 0 ? "No" : this.props.amenities.showers.map(x => x)}</div>
                            <div className={this.props.amenities.stafforvolunteerhostonsite == "" || this.props.amenities.stafforvolunteerhostonsite == "No" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Staff on site: </span>{this.props.amenities.stafforvolunteerhostonsite == "" ? "No" : this.props.amenities.stafforvolunteerhostonsite}</div>
                            <div className={this.props.amenities.toilets.length == 0 ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Toilets: </span>{this.props.amenities.toilets.length == 0 ? "No" : this.props.amenities.toilets.map(x => x)}</div>
                            <div className={this.props.amenities.trashrecyclingcollection == "" || this.props.amenities.trashrecyclingcollection == "No" ? styles.no : styles.yes}><span className={styles.amenitiestitle}>Trash collection: </span>{this.props.amenities.trashrecyclingcollection == "" ? "No" : this.props.amenities.trashrecyclingcollection}</div>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={this.state.showb}
                    onHide={bclose}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Accessibility
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={styles.accessibility}>
                            {this.props.accessibility.additionalinfo != "" ? <div className={styles.header}>Additional Info</div> : null}
                            <div className={styles.info}>{this.props.accessibility.additionalinfo}</div>
                            {this.props.accessibility.adainfo != "" ? <div className={styles.header}>ADA Info</div> : null}
                            <div className={styles.info}>ADA {this.props.accessibility.adainfo}</div>
                            {this.props.accessibility.accessroads != "" || this.props.accessibility.accessroads.length != 0 ? <div className={styles.header}>Access Roads</div> : null}
                            <div className={styles.info}>{this.props.accessibility.accessroads.map(x => x)}</div>
                            {this.props.accessibility.cellphoneinfo != "" ? <div className={styles.header}>CellPhone Info</div> : null}
                            <div className={styles.info}>{this.props.accessibility.cellphoneinfo}</div>
                            {this.props.accessibility.firestovepolicy != "" ? <div className={styles.header}>Firestove Policy</div> : null}
                            <div className={styles.info}>{this.props.accessibility.firestovepolicy}</div>
                            {this.props.accessibility.internetinfo != "" ? <div className={styles.header}>Internet Info</div> : null}
                            <div className={styles.info}>{this.props.accessibility.internetinfo}</div>
                            {this.props.accessibility.rvinfo != "" ? <div className={styles.header}>RV Info</div> : null}
                            <div className={styles.info}>{this.props.accessibility.rvinfo}</div>
                            {this.props.accessibility.wheelchairaccess != "" ? <div className={styles.header}>Wheelchair Access</div> : null}
                            <div className={styles.info}>{this.props.accessibility.wheelchairaccess}</div>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={this.state.showc}
                    onHide={cclose}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {this.props.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.latlong != "" ? <SimpleMap lat={this.props.latlong.substring(this.props.latlong.search(":") + 1, this.props.latlong.search(","))}
                            long={this.props.latlong.substring(this.props.latlong.search(",") + 6, this.props.latlong.length - 1)} /> : "No coordinate data available"}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Campground;
