import React from 'react';
import Dog from '../Dog/Dog';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Dog/>
            <Footer/>
        </div>
    );
};

export default Home;