import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Catagory from './Catagory';

const Catagories = () => {
    const [catagories, setCatagory] = useState([])
    useEffect(()=>{
        fetch('catagory.json')
        .then((res) => res.json())
        .then((data) => setCatagory(data))
    }, [])
    return (
        <div className='py-10'>
            <div className='text-center'>
                <h3 className='text-4xl font-bold py-2'>Job Catagory List</h3>
                <p className='text-slate-600'>Get Hired Faster, Personalized Job Matches Based on Your Preferences</p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between px-20 py-10'>
                {
                    catagories.map(catagory => <Catagory key={catagory.id} catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;