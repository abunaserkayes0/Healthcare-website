import React, { useState } from 'react';
import { Form ,Button } from 'react-bootstrap';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css';
const Register = () => {
   const{createEmailPassword,setUser,updateUser,signInWithGoogle} =useAuth();

   const history = useHistory();
   const location=useLocation()

   const url = location.state?.from || ('/home');
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassWord] = useState('');
    

    const handelName = (e) => {
        setName(e.target.value);
    }
    const handelEmail = (e) => {
        setEmail(e.target.value);
    }
    const handelPassword = (e) => {
        setPassWord(e.target.value);
    }
    const handelRegister = (e) => {
        e.preventDefault();
        createEmailPassword(email, password)
        .then((credential) => {
            const user = credential.user;
            updateUser(name);
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
            <Form onSubmit={handelRegister}  className="w-25 mx-auto text-white bg-danger rounded-3 p-5 my-4">
                <h3 className="fw-bold">Please SignUp</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control onBlur={handelName} type="text" placeholder="Enter Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control onBlur={handelPassword} type="password" placeholder="Password" required/>
                </Form.Group>
                <Link className="text-white text-decoration-none" to='/login'><p>All Ready Register?</p></Link>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
                <Button onClick={handelGoogleSignIn} className="btn btn-primary mx-3">Google</Button>
            </Form>
        </div>
    );
};

export default Register;