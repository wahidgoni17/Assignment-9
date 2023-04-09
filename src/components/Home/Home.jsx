import React from 'react';
import Banner from './Banner';
import Catagories from './Catagories';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <Featured></Featured>
        </div>
    );
};

export default Home;