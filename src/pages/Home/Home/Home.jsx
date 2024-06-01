import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import HowWorks from '../HowWorks/HowWorks';
import TopEarners from '../TopEarners/TopEarners';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <HowWorks></HowWorks>
            <TopEarners></TopEarners>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;