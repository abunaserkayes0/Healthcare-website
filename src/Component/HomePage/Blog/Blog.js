import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ThumbUpIcon,ChatAlt2Icon,ShareIcon} from '@heroicons/react/solid';

import './Blog.css'

const Blog = () => {
    return (
        <Container>
                <div>
                    <div className="text-center">
                        <h2 className="fw-bold">Our Blog</h2>
                        <p>A health blog can cover diverse health related concerns such as nutrition and diet, fitness.</p>
                    </div>
                </div>
            <Row className="my-5">
                <div className="col-md-4">
                    <div>
                        <div>
                        <img src="https://i.ibb.co/Qn4BqHK/blog1.jpg" alt="" />
                    </div>
                        <h3>Why primary healthCare in your life?</h3>
                        <div className="d-flex align-items-center">
                            <span className="me-3">596 <ThumbUpIcon className="heroIcons"/></span>
                            <span className="mx-3">837  <ChatAlt2Icon className="heroIcons"/></span>
                            <span className="mx-3">Share<ShareIcon className="heroIcons"/></span>
                        </div>
                        <p><q>We don’t know if more transmissible than other Delta strains or if it just got caught up in some superspreader events that seeded it. No reason to think immune evasive and might well be nothing. Something to keep an eye on but not panic over.</q></p>
                        <button className="btn btn-dark">See More</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img src="https://i.ibb.co/JCvKVwW/blog2.jpg" alt="" />
                    </div>
                        <h3>Excepteur sint occaecat cupidatat non proident!</h3>
                        <div className="d-flex align-items-center">
                            <span className="me-3">596 <ThumbUpIcon className="heroIcons"/></span>
                            <span className="mx-3">837  <ChatAlt2Icon className="heroIcons"/></span>
                            <span className="mx-3">Share<ShareIcon className="heroIcons"/></span>
                        </div>
                        <p><q>DNA and RNA vaccines use genetic material to deliver information to human cells and elicit an immune response. DNA vaccines are safe, easy, affordable to produce, and, unlike RNA vaccines, are stable at room temperature.</q></p>
                        <button className="btn btn-dark">See More</button>
                </div>
                <div className="col-md-4">
                    <div>
                        <img src="https://i.ibb.co/426SXFX/blog3.jpg" alt="" />
                    </div>
                        <h3>Our Definitive Guide to Cold and Flu</h3>
                        <div className="d-flex align-items-center">
                            <span className="me-3">596 <ThumbUpIcon className="heroIcons"/></span>
                            <span className="mx-3">837  <ChatAlt2Icon className="heroIcons"/></span>
                            <span className="mx-3">Share<ShareIcon className="heroIcons"/></span>
                        </div>
                        <p><q>The VISION researchers say that this variation may be related to differences in the methods of the two studies and restrictions on the timing of vaccinations.They also explain that bd study only examined vaccinations that had occurred.</q></p>
                        <button className="btn btn-dark">See More</button>
                </div>
            </Row>
        </Container>
    );
};

export default Blog;