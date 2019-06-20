import React, { Component } from 'react';
import styles from './media.module.css';
import Article from './article.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Media extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className={styles.media}>
        <Row>
          <Col xs={6}>
            <div className={styles.col1}>
              {this.props.articles.length == 1 ? this.props.articles.map(x => <Article title={x.title} description={x.listingdescription} url={x.url} img={x.listingimage.url} />)
              : this.props.articles.slice(0, this.props.articles.length / 2).map(x => <Article title={x.title} description={x.listingdescription} url={x.url} img={x.listingimage.url} />)}
            </div>
          </Col>
          <Col xs={6}>
            <div className={styles.col2}>
              {this.props.articles.length == 1 ? null : this.props.articles.slice(this.props.articles.length / 2, this.props.articles.length).map(x => <Article title={x.title} description={x.listingdescription} url={x.url} img={x.listingimage.url} />)}
            </div>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default Media;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION


//TODO LIST

//ADD LINKS TO SEARCH FROM STATES, CATEGORIES ON PARK PAGE
//MEDIA
//EVENTS
//PEOPLE PLACES IN EDUCATIONAL
//IMAGES
//CSS
//SEARCH
//CSS FOR FRONT PAGE ETC
//CLEAN MAYBE
//DOCUMENTATION
//COMMENT
//TESTING?
//WRITEUP
//CHECK REQUIREMENTS
//https://en.wikipedia.org/wiki/Ninety-ninety_rule