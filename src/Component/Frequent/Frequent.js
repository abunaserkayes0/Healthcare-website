import React from 'react';
import { Accordion, Card, Col, Container, Row,Button } from 'react-bootstrap';
import Rating from 'react-rating';
import './Frequent.css';

const Frequent = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="text-center my-4">
                        <h2 className="fw-bold">Any Question with Frequent section?</h2>
                        <p>Have you ever been watching a live sporting event when an athlete suddenly left the game due to injury? Of course you have.</p>
                    </div>
                    <div className="col-lg-6">
                    <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h6 className="fw-bold">How Does Psychologist Help In Developing Mental Health?</h6></Accordion.Header>
                                <Accordion.Body>
                                Psychologists' screening services are key to meeting this need, and psychologists help patients develop coping strategies and healthy behaviors, which are effective in reducing the factors associated with the development of illness.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h6 className="fw-bold">Do You Have Any Podcast Session?</h6></Accordion.Header>
                                <Accordion.Body>
                                That’s me in a nutshell. I am not used to the sound of my own voice. I have no idea what’s involved in getting audio recorded and edited. I cringe at spending money on a microphone. And I’m rather uncomfortable speaking extemporaneously without the safety net of rough draft after rough draft after rough draft.So what can someone like me—and maybe someone like you—do about it?
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h6 className="fw-bold">How To Consult With A Senior Psychologist?</h6></Accordion.Header>
                                <Accordion.Body>
                                The importance of consulting with other professionals to maintain acceptable standards of care is well documented in many health care professions. However, evidence indicates that many psychologists fail to utilize consultation when needed,number of years in practice, and proximity to available consultants. In this article, we review the research on the use of consultation by psychologists as well as other health care professionals. 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><h6 className="fw-bold">Can We Also Share Our Thoughts In Blog Section?</h6></Accordion.Header>
                                <Accordion.Body>
                                In some ways, writing a blog is like keeping a diary, which was very fashionable in earlier days.  However, I never have kept a diary, or felt the need to.  Actually, the similarity would only apply if we used our blog to comment on day-to-day events, which I do not.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><h6 className="fw-bold">Do You Have Session?</h6></Accordion.Header>
                                <Accordion.Body>
                                In this article, we’ll walk you through every stage of launching your show, from planning and recording to publishing and promotion. By the end, you’ll know exactly how to make a podcast, and hopefully, be motivated to do it as soon as possible!
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img className="w-100 py-3" src="https://i.ibb.co/TYBDVvw/female-doctor-with-stethoscope-pointing-clipboard-white-background-1.jpg" alt="" />
                        </div>
                    </div>
                </Row>
                <div className="text-center my-4">
                        <h2 className="fw-bold">Testimonial</h2>
                        <p></p>
                </div>
                <Row md={3} xs={1} className="text-center g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/rwqQL6H/skyscraper-view-city-leader-window-frame.png" />
                            <Card.Body>
                            <Card.Title className="fw-bold">Michel Stock</Card.Title>
                            <Card.Text className="fw-light">
                            “People who laugh actually live longer than those who don’t laugh. Few persons realize that health actually varies according to the amount of laughter.”
                            </Card.Text>
                            </Card.Body>
                            <Rating
                            emptySymbol="far fa-star fa-2x"
                            fullSymbol="fas fa-star fa-2x"
                            />
                            <Button className="btn btn-danger my-3">See More</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/2jp7ZsQ/shipping-businessman-management-occupation-industrial.png" />
                            <Card.Body>
                            <Card.Title className="fw-bold">Clark Hegumen</Card.Title>
                            <Card.Text className="fw-light">
                            “With every pill we have prescribed for us we should also be given a creative prayer, a suggested way to correct our destructive patterns of thought.”
                            </Card.Text>
                            </Card.Body>
                            <Rating
                            emptySymbol="far fa-star fa-2x"
                            fullSymbol="fas fa-star fa-2x"
                            />
                            <Button className="btn btn-danger my-3">See More</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/f1ZxSkc/man-black-hair-smart-shipping-manager.png" />
                            <Card.Body>
                            <Card.Title className="fw-bold">Steven Mark</Card.Title>
                            <Card.Text className="fw-light">
                            “Health is a state of complete harmony of the body, mind and spirit.  When one is free from physical disabilities and mental distractions, the gates of the soul open.”
                            </Card.Text>
                            </Card.Body>
                            <Rating
                            emptySymbol="far fa-star fa-2x"
                            fullSymbol="fas fa-star fa-2x"
                            />
                            <Button className="btn btn-danger my-3">See More</Button>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>   
        </div>
    );
};

export default Frequent;


/* 

 */