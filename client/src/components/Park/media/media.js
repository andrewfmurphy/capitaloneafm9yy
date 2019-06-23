//View for article components

import React, { Component } from 'react';

import styles from './media.module.css';

//Component imports
import Article from './article.js';

//Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Media extends Component {
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
    //No current articles
    if (this.props.articles.length == 0) {
     
      return (
        <div style={scope.none}>
          There are no Articles at this time
          </div>
      )
    }
    else {
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
}

export default Media;