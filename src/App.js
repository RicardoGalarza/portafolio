import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';

const App = () => {
    return (
        <Router>
            <Header /> {/* Navbar siempre visible */}
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
