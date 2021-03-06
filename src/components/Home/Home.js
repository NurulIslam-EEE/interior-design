import React from 'react';
import Banner from '../Banner/Banner';
import Enquiry from '../Enquiry/Enquiry';
import Feature1 from '../Features/Feature1/Feature1';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <Services />
            <Feature1 />
            <Enquiry />
        </div>
    );
};

export default Home;