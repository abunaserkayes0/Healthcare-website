import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const{name,image,description}=service;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className="fw-bold fs-2">{name}</Card.Title>
                        <Card.Text>{description.slice(0, 230)}</Card.Text>
                        <Button className="btn btn-success">Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;