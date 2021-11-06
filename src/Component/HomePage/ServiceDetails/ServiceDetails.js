import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    const[singleService,setSingleService]=useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch('/services.json')
            .then(response => response.json())
            .then(data=>setServiceDetails(data))
    }, [])

    useEffect(() => {
        if (serviceDetails.length > 0) {
            const matchedService = serviceDetails.find(serviceDetail =>serviceDetail.id === parseInt(id))
            setSingleService(matchedService); 
        }
    }, [serviceDetails])
    const {name,image,description,doctor_name}=singleService;
    return (
        <div>
            <Container>
                <h1 className="text-center fw-bold text-danger mt-3">Single Service Details:</h1>
                <Row md={3} className="text-center g-md-5 my-3">
                    <Col className="mx-auto">
                        <Card>
                            <Card.Img variant="top" src={image} />
                            <h2 className="fw-bold mt-5">Doctor:{doctor_name}</h2>
                            <Card.Body>
                                <Card.Title className="fw-bold">{name}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                            </Card.Body>
                            <Link to="/home"><Button className="my-3">Go Back</Button></Link>
                        </Card>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default ServiceDetails;