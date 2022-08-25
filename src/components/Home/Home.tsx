import React from 'react';

import Main from './Main/Main';
import Nft from './Nft/Nft';
import Story from './Story/Story';
import Team from './Team/Team';
import RoadMap from './RoadMap/RoadMap';
import { useRecoilValue } from 'recoil';
import { windowInfoAtom } from '../../lib/recoil/atoms';

const Home = () => {
    const { width: windowWidth, zoomLevel } = useRecoilValue(windowInfoAtom);
    return (
        <>
            <Main />
            <Nft />
            <Story />
            {windowWidth > 950 / zoomLevel && <RoadMap />}
            <Team />
        </>
    );
};

export default Home;
