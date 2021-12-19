import React from 'react';
import Banner from '../Banner/Banner';
import Enquiry from '../Enquiry/Enquiry';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <Services />
            <Enquiry />
        </div>
    );
};

export default Home;