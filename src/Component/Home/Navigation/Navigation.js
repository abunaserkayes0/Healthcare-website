import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="fw-bold" href="#home">Special Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-center">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
           </Navbar>
        </div>
    );
};

export default Navigation;