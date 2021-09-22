import React from 'react';
import Dog from '../Dog/Dog';
import NavBar from './NavBar/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Dog/>
        </div>
    );
};

export default Home;