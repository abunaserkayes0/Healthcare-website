import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import './Instrument.css';

const Instrument = ({ instrument }) => {
    const{name,image,price}=instrument;
    return (
        <div className="text-center">
            <Col>
                <Card>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title className="fw-bold">{name}</Card.Title>
                        <h3 className="fw-bold">{price}</h3>
                        <Button className="btn btn-success">Views More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Instrument;