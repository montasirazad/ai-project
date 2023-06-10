import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';

const Home = () => {

    return (
        <div style={{ position: 'relative' }}>
            {/* <h1>this is home</h1> */}
            <Banner />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;