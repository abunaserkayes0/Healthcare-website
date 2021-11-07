import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div>
            <Form className="w-25 mx-auto bg-info rounded-3 p-5 my-4">
                <h2 className="fw-bold">Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link className="text-dark text-decoration-none" to='/register'><p>New User?</p></Link>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
            </Form>
        </div>
    );
};

export default Login;