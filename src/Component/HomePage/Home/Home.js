import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Blog></Blog>
        </div>
    );
};

export default Home;