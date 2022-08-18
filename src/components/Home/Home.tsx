import React from 'react';

import Main from './Main/Main';
import Nft from './Nft/Nft';
import Story from './Story/Story';
import Team from './Team/Team';
import RoadMap from './RoadMap/RoadMap';
import { useRecoilValue } from 'recoil';
import { scrollHeightAtom } from '../../lib/recoil/atoms';

const Home = () => {
    const { windowWidth } = useRecoilValue(scrollHeightAtom);
    return (
        <>
            <Main />
            <Nft />
            <Story />
            {windowWidth > 642 && <RoadMap />}
            <Team />
        </>
    );
};

export default Home;
