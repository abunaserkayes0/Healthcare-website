import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center p-5 my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-12">
                            <h3 className="fw-bold">Special Hospital</h3>
                            <p>BSH has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. </p>
                        </div>
                        <div className="col-md-4 col-sm-4 col-12">
                            <h5 className="fw-bold mx-auto">Instruments</h5>
                                <div>
                                    <p>Home</p>
                                    <p>About us</p>
                                    <p>Services</p>
                                    <p>Blog</p>
                                    <p>Testimonial</p>
                                </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-12">
                            <h5 className="text-center fw-bold">Contact</h5>
                            <p>N/S Road,Kushtia-Sodor,Kushtia</p>
                            <p>info@gmail.com</p>
                            <p>017XX-XXXXXX</p>
                            <p>+1 555 XXX XXX</p>
                        </div>
                    </div>
                    <div>
                        <p className="fs-5">&copy;2021 Provider Special Hospital</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;