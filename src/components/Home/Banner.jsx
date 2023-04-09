import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center px-20 py-5 bg-emerald-50'>
            <div>
                <h1 className='text-5xl font-bold py-3'>Experience the Power of <br /> Digital Transformation with <br /> Our Services</h1>
                <p className='text-lg font-medium py-3 text-slate-600'>Find Your Dream Job Today: Search and Apply <br /> with Ease.Job Opportunities Galore <br /> Discover Your Next Role Here</p>
                <button className='btn btn-primary my-3'>Explore</button>
            </div>
            <div>
                <img className='rounded-3xl' src={`https://media.istockphoto.com/id/653017756/photo/smiling-mature-businessman.jpg?s=612x612&w=0&k=20&c=hBdCGfLxR-TK29cpQYZ-qNayV_BvPibuVLbC1ed_EFk=`} alt="" />
            </div>
        </div>
    );
};

export default Banner;