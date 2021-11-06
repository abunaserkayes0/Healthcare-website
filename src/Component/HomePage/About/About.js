import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="my-5">
            <Container>
                    <div className="text-center">
                        <h1 className="fw-bold">About Us</h1>
                        <p>Look at About Us Section and Read this section</p>
                    </div>
                <Row>
                    <div className="col-md-6">
                            <div>
                                <img className="w-100" src="https://i.ibb.co/1QksNYz/about-image.png" alt="" />
                            </div>
                        </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="">
                            <h2 className="fw-bold">Your faithful partners Medical Goods</h2>
                            <p>Houser allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
                            <button className="btn btn-warning">About Us</button>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;