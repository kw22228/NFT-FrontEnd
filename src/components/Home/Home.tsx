import React from 'react';

import Main from './Main/Main';
import Nft from './Nft/Nft';
import Story from './Story/Story';
import Team from './Team/Team';
import RoadMap from './RoadMap/RoadMap';
import { useRecoilValue } from 'recoil';
import { windowInfoAtom } from '../../lib/recoil/atoms';
import Banner from './Banner/Banner';

const Home = () => {
    const { width: windowWidth, zoomLevel } = useRecoilValue(windowInfoAtom);
    return (
        <>
            <Banner />
            <Nft />
            <Main />
            <Story />
            {windowWidth > 950 / zoomLevel && <RoadMap />}
            <Team />
        </>
    );
};

export default Home;
