import React from 'react';

const Catagory = ({catagory}) => {
    const {name, logo, jobs_available} = catagory
    return (
        <div className='bg-slate-100 py-10 px-10'>
            <img className='h-20 w-20 mb-4' src={logo} alt="" />
            <p className='text-xl font-medium'>{name}</p>
            <p className='py-2 text-slate-600'>{jobs_available}</p>
        </div>
    );
};

export default Catagory;