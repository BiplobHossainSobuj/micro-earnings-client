import React from 'react';

const SectionIntro = ({title,subtitle}) => {
    return (
        <div className='mx-auto text-center my-20 w-3/4'>
            <h3 className='uppercase text-4xl'>{title}</h3>
            <p className='py-4'>{subtitle}</p>
        </div>
    );
};

export default SectionIntro;