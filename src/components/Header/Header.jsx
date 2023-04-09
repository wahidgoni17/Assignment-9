import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-8 py-5 h-20 bg-emerald-50'>
            <div>
            <Link to='/'><h1 className='text-4xl font-bold'>DigitalGenius</h1></Link>
            </div>
            <div className='flex gap-5 text-xl text-slate-600'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied'>Applied Jobs</Link>
                <Link to='/blog'>Blogs</Link>
            </div>
            <div>
                <button className='btn btn-primary text-white'>Apply Now</button>
            </div>
        </div>
    );
};

export default Header;