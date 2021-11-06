import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data=>setServices(data))
    },[])
    return (
        <div id="services">
            <div className="container">
                <div className="text-center">
                    <h1 className="fw-bold">Our Services</h1>
                    <p>Our services is most useful for You</p>
                </div>
                <div className="services-container">
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.map(service=><Service key={service.id} service={service}></Service>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Services;