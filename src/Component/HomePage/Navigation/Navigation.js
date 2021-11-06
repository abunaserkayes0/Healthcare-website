import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';
const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand className="fw-bold">Special Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-center">
                        <Nav>
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                        </Nav>
                    <Navbar.Text>
                        Signed in as: Mark Otto
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
           </Navbar>
        </>
    );
};

export default Navigation;