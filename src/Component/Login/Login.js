import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
const Login = () => {
    const { setUser, signInWithGoogle, signInEmailPassword} = useAuth();
    
    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || ('/home');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelEmail = (e) => {
        setEmail(e.target.value);
    }

    const handelPassword = (e) => {
        setPassword(e.target.value);
    }
    const handelRegister = (e) => {
        e.preventDefault()
        signInEmailPassword(email, password)
        .then((credential) => {
            const user = credential.user;
            setUser(user);
            history.push(url)
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          })
    }

    const handelGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            setUser(user);
            history.push(url);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          })
    }
    return (
        <div>
            <Form onSubmit={handelRegister} className="w-25 mx-auto bg-info rounded-3 p-5 my-4">
                <h2 className="fw-bold">Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control onBlur={handelPassword} type="password" placeholder="Password" />
                </Form.Group>
                <Link className="text-dark text-decoration-none" to='/register'><p>New User?</p></Link>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
                <Button onClick={handelGoogleSignIn} className="btn btn-primary mx-3">Google</Button>
            </Form>
        </div>
    );
};

export default Login;