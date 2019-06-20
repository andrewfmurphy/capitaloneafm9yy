import React, { Component } from 'react';
import styles from './campground.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class Campground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showa: false,
      showb: false
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };

  }


  render() {
    let aclose = () => this.setState({ showa: false });
    let bclose = () => this.setState({ showb: false });
    return (
      <div className="center">
        <div className={styles.name}>{this.props.name}</div>
        <div className={styles.description}>{this.props.description}</div>
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



        {/* {this.props.directionsoverview}{this.props.amenities} {this.props.regulationsoverview} */}

        <Button variant="primary" onClick={() => this.setState({ showa: true })}>
          Amenities
        </Button>

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
              <div>Amphitheater: {this.props.amenities.amphitheater == "" ? "No" : this.props.amenities.amphitheater}</div>
              <div>Cellphone reception: {this.props.amenities.cellphonereception == "" ? "No" : this.props.amenities.cellphonereception}</div>
              <div>Dumpstation: {this.props.amenities.dumpstation == "" ? "No" : this.props.amenities.dumpstation}</div>
              <div>Firewood for sale: {this.props.amenities.firewoodforsale == "" ? "No" : this.props.amenities.firewoodforsale}</div>
              <div>Food storage lockers: {this.props.amenities.foodstoragelockers == "" ? "No" : this.props.amenities.foodstoragelockers}</div>
              <div>Ice for sale: {this.props.amenities.iceavailableforsale == "" ? "No" : this.props.amenities.iceavailableforsale}</div>
              <div>Internet connectivity: {this.props.amenities.internetconnectivity == "" ? "No" : this.props.amenities.internetconnectivity}</div>
              <div>Laundry: {this.props.amenities.laundry == "" ? "No" : this.props.amenities.laundry}</div>
              <div>Potable water: {this.props.amenities.potablewater.length == 0 ? "No" : this.props.amenities.potablewater.map(x => x)}</div>
              <div>Showers: {this.props.amenities.showers.length == 0 ? "No" : this.props.amenities.showers.map(x => x)}</div>
              <div>Staff on site: {this.props.amenities.stafforvolunterrhostonsite == "" ? "No" : this.props.amenities.stafforvolunterrhostonsite}</div>
              <div>Toilets: {this.props.amenities.toilets.length == 0 ? "No" : this.props.amenities.toilets.map(x => x)}</div>
              <div>Trash collection: {this.props.amenities.trashrecyclingcollection == "" ? "No" : this.props.amenities.trashrecyclingcollection}</div>
            </div>
          </Modal.Body>
        </Modal>


        <Button variant="primary" onClick={() => this.setState({ showb: true })}>
          Accessibility
        </Button>

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
              <div>{this.props.accessibility.additionalinfo}</div>
              <div>ADA {this.props.accessibility.adainfo}</div>
              <div>{this.props.accessibility.accessroads.map(x => x)}</div>
              <div>{this.props.accessibility.cellphoneinfo}</div>
              <div>{this.props.accessibility.classifications.map(x => x)}</div>
              <div>{this.props.accessibility.firestovepolicy}</div>
              <div>{this.props.accessibility.internetinfo}</div>
              <div>{this.props.accessibility.rvallowed}</div>
              <div>{this.props.accessibility.rvinfo}</div>
              <div>{this.props.accessibility.rvmaxlength}</div>
              <div>{this.props.accessibility.trailerallowed}</div>
              <div>{this.props.accessibility.trailermaxlength}</div>
              <div>{this.props.accessibility.wheelchairaccess}</div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Campground;
