import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import './Frequent.css';

const Frequent = () => {
    return (
        <div>
            <Container>
                <div className="text-center my-4">
                    <h2 className="fw-bold">Any Question with Frequent section?</h2>
                    <p>Have you ever been watching a live sporting event when an athlete suddenly left the game due to injury? Of course you have.</p>
                </div>
                <Row>
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
                            <img className="w-100 rounded-3 py-3" src="https://i.ibb.co/TYBDVvw/female-doctor-with-stethoscope-pointing-clipboard-white-background-1.jpg" alt="" />
                        </div>
                    </div>
                </Row>
            </Container>   
        </div>
    );
};

export default Frequent;