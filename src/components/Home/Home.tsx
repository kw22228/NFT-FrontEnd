import React from 'react';

import Main from './Main/Main';
import Nft from './Nft/Nft';
import Story from './Story/Story';
import Team from './Team/Team';
import RoadMap from './RoadMap/RoadMap';

import FixedBtn from '../FixedBtn/FixedBtn';

const Home = () => {
    return (
        <>
            <Main />
            <Nft />
            <Story />
            <RoadMap />
            <Team />
        </>
    );
};

export default Home;
