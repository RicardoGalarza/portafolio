import React from 'react';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';

const Home = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;
