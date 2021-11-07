import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';
const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Link className="text-decoration-none" to="/home">
                         <Navbar.Brand className="fw-bold">Special Hospital</Navbar.Brand>   
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-center">
                        <Nav>
                            <Nav.Link as={HashLink}  to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink}  to="/frequent">Frequent</Nav.Link>
                            <Nav.Link as={HashLink}  to="/Instruments">Instruments</Nav.Link>
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