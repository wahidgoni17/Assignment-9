import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <h1>DigitalGenius</h1>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied'>Applied Jobs</Link>
                <Link to='/blog'>Blogs</Link>
            </div>
        </div>
    );
};

export default Header;