import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Navigation.css';
const Navigation = () => {
    const { user, logOut } = useAuth();
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
                            <Nav.Link as={HashLink} to="/Instruments">Instruments</Nav.Link>
                            {user?.email ?
                            <Nav.Link as={HashLink} to="/" onClick={logOut}>LogOut</Nav.Link>  
                                :
                            <Nav.Link as={HashLink} to="/login" onClick={logOut}>Log In</Nav.Link>    
                            }
                        </Nav>
                    <Navbar.Text>
                            Sign In:{user?.displayName}
                            {user.displayName&& <img className="profile-image" src={user?.photoURL} alt=""/>}
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
           </Navbar>
        </>
    );
};

export default Navigation;