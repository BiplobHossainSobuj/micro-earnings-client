import React from 'react';
import SectionIntro from '../../Shared/SectionIntro/SectionIntro';

const Features = () => {
    return (
        <div>
            <SectionIntro title={'Features'} subtitle={'Just explore our website find your suitable task,complete task and get reward'}></SectionIntro>
            <div className='md:flex justify-between my-24'>
                <div className='text-center'>
                    <div className="flex justify-center">
                        <img className='h-60 text-center w-60 rounded-full' src="https://img.freepik.com/premium-vector/earn-points-concept-male-character-rejoices-new-accrued-bonuses-loyalty-program_566886-10853.jpg?w=996" alt="" />
                    </div>
                    <h3 className='font-bold text-2xl'>Earn Coins by Completing Tasks</h3>
                    <p>Start earning by money with easy steps. <br />You can explore verity of tasks</p>
                </div>
                <div className='text-center'>
                    <div className="flex justify-center">
                        <img className='h-60 text-center w-60 rounded-full' src="https://img.freepik.com/free-vector/appointment-booking-calendar-concept_23-2148556898.jpg?t=st=1718008559~exp=1718012159~hmac=37de46c72858590ee4f4b234e8fdcda5f06eae01f7edd017783202712df2eba3&w=826" alt="" />
                    </div>
                    <h3 className='font-bold text-2xl'>Create and Manage Tasks</h3>
                    <p>You can create and modify task with easy steps. <br /> You can handle and manage task</p>
                </div>
                <div className='text-center'>
                    <div className="flex justify-center">
                        <img className='h-60 text-center w-60 rounded-full' src="https://img.freepik.com/free-vector/credit-card-payment-concept-landing-page_52683-24768.jpg?t=st=1718008799~exp=1718012399~hmac=997f4c1150820ccff78324b06bd3fbd321a0b14531d21304c15f443a1f2460b3&w=826" alt="" />
                    </div>
                    <h3 className='font-bold text-2xl'>Secure Payments</h3>
                    <p>You can enjoy secure payment options. <br /> without any charges</p>
                </div>

            </div>
        </div>
    );
};

export default Features;