import React from 'react';
import Banner from './Banner/Banner';
import Navigation from './Navigation/Navigation';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
        </div>
    );
};

export default Home;