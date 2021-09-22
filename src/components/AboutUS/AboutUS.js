import React from 'react';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';

const AboutUS = () => {
    return (
        <div className="text-center">
            <NavBar />
            <h1 className="text-2xl font-bold py-2">This page is under development</h1>
            <div className="flex justify-center py-2">
                <img src="https://media2.giphy.com/media/ocuQpTqeFlDOP4fFJI/giphy.gif" alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default AboutUS;