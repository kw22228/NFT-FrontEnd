import React from 'react';

import Main from './Main/Main';
import Nft from './Nft/Nft';
import Story from './Story/Story';
import Team from './Team/Team';
import RoadMap from './RoadMap/RoadMap';
import { useRecoilValue } from 'recoil';
import { windowWidthAtom } from '../../lib/recoil/atoms';

const Home = () => {
    const windowWidth = useRecoilValue(windowWidthAtom);
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
