import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <Row className="d-flex justify-content-evenly align-items-center my-5">
                            <div className="col-lg-6">
                                <div>
                                    <h1 className="fw-bold">Expert Psychologist For Your Health</h1>
                                    <p>A psychologist is a professional who practices psychology and studies normal and abnormal mental states, perceptual, cognitive, emotional, and social processes and behavior by experimenting with, and observing, interpreting, and recording how individuals relate to one another and to their environments.</p>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div >
                                    <img className="w-100" src="https://i.ibb.co/yqhm1WF/banner-3.png" alt="" />
                                </div>
                            </div>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="d-flex justify-content-evenly align-items-center my-5">
                            <div className="col-lg-6">
                                    <div>
                                        <h1 className="fw-bold">Best Child Specialist For Your kids</h1>
                                        <p>Child life specialists collaborate with parents and other health care professionals to meet the distinct needs of children in managing the effects of stress and trauma.Understanding that a child's well-being depends on the support of the family, they also provide information,and other family members</p>
                                        <button className="btn btn-dark">Details</button>
                                    </div>
                            </div>
                            <div className="col-lg-6">
                                <div >
                                    <img className="w-100" src="https://i.ibb.co/KVqzP0X/banner-2.png" alt="" /> 
                                </div>
                            </div>  
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="d-flex justify-content-evenly align-items-center my-5">
                            <div className="col-lg-6">
                                <div>
                                    <h1 className="fw-bold">Physician To Improve Physical Health</h1>
                                    <p>Exercise can help prevent heart disease, stroke, diabetes, and colon cancer. It can help treat depression,Routine exercise can make you feel better and keep your weight under control. Try to be active for 30 to 60 minutes about 5 times a week. Remember, any amount of exercise is better than none.</p>
                                    <button className="btn btn-warning">Details</button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div >
                                    <img className="w-100" src="https://i.ibb.co/p0wvpyk/banner-1.png" alt="" />
                                </div>
                            </div>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Banner;