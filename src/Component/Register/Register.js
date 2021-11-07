import React from 'react';
import { Form ,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div>
            <Form className="w-25 mx-auto text-white bg-danger rounded-3 p-5 my-4">
                <h3 className="fw-bold">Please SignUp</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link className="text-white text-decoration-none" to='/login'><p>All Ready Register?</p></Link>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>
        </div>
    );
};

export default Register;