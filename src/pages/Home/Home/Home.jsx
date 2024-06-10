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
            <div className='mx-auto text-center my-20 w-3/4'>
                <h3 className='uppercase text-4xl'>How It works</h3>
                <p className='py-4'>Are you ready to turn your spare time into rewards? Register now and unlock a world of opportunities to earn rewards by completing simple tasks. Whether you're a student looking to make some extra cash.</p>
            </div>
            <HowWorks></HowWorks>
            <TopEarners></TopEarners>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;