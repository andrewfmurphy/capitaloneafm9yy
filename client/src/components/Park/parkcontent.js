import React, { Component } from 'react';
import styles from './parkcontent.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

class ParkContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className={styles.parkcontent}>

        <Image src={this.props.image.url} fluid className={styles.image}></Image>
        {this.props.image.caption}
        <div>{this.props.description}</div>


        <div>{this.props.directions}</div>


        <div>{this.props.weather}</div>

      </Container>
    );
  }
}

export default ParkContent;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION