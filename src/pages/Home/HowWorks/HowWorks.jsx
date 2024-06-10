import React from 'react';

const HowWorks = () => {
    return (
        <div className='flex justify-center'>
            
            <ul className="timeline timeline-vertical md:timeline-horizontal">
                <li>
                    <div className="timeline-start">Register</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box text-center w-96">
                        <div className="flex justify-center">
                            <img className='h-60 text-center w-60 rounded-full' src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?t=st=1718007766~exp=1718011366~hmac=bacbc32822a500eddb022438e9c5218538051a76819fbc9c19d0db3e35091b4c&w=826" alt="" />
                        </div>
                        <h3 className='font-bold text-2xl'>Registart & start earnings</h3>
                        <p>You can explore our task after registration  and will be able to submit task as want</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end">Complete Task</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start  timeline-box text-center w-96">
                        <div className="flex justify-center">
                            <img className='h-60 text-center w-60 rounded-full' src="https://img.freepik.com/free-vector/ok-concept-illustration_114360-2060.jpg?t=st=1718007848~exp=1718011448~hmac=e2f208453f17cd8e761661e459874ed75477b49c7ee1d82fc3eb84d656d8221e&w=826" alt="" />
                        </div>
                        <h3 className='font-bold text-2xl'>Explore & Submit Task</h3>
                        <p>We offer best hotel for you wihtin budget. We will provide as you want</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start">Earn Reward</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box text-center w-96">
                        <div className="flex justify-center">
                            <img className='h-60 text-center w-60 rounded-full' src="https://img.freepik.com/free-vector/happy-tiny-customers-with-reward-prizes-good-job-gifts-winners-people-jumping-present-boxes-with-confetti-flat-vector-illustration-experience-birthday-celebration-special-bonus-concept_74855-21178.jpg?t=st=1718007898~exp=1718011498~hmac=99ee3b745b34e41b7aa9bb607e48c115318587cfa0d3fca4532157be4610deb6&w=1380" alt="" />
                        </div>
                        <h3 className='font-bold text-2xl'>Earn & withdraw reward</h3>
                        <p>After your task submission you will get reward if you task is accepted</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default HowWorks;