import React from 'react';
import Counter from '../Counter/Counter';
import Dog from '../Dog/Dog';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar />
            {/* <Counter /> */}
            <Dog/>
            <Footer/>
        </div>
    );
};

export default Home;