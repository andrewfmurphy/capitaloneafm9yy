import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class ParkItem extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props.image);
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        {this.props.designation}
                    </Card.Text>
                    <Link to={"/park/" + this.props.code}><Button variant="primary">Go</Button> </Link>
                </Card.Body>
            </Card>
        );
    }
}

export default ParkItem;

//NAME, DESIGNATION, STATE LAT LONG DESCRIPTION