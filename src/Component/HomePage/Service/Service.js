import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const{id,name,image,description}=service;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className="fw-bold fs-2">{name}</Card.Title>
                        <Card.Text>{description.slice(0, 230)}</Card.Text>
                        <Link to={`service/${id}`}>
                            <Button className="btn btn-success">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;