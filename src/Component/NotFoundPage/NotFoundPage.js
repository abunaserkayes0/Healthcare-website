import React from 'react';
import './NotFoundPage.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return (
        <div>
            <div className="text-center">
                <img className="w-50" src="https://i.ibb.co/1GnQqc0/not-Found-Page.png" alt="" />
                <br />
                <Link to='/home'>
                    <Button className="btn btn-warning">Go Back Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
