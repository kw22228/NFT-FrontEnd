import React, { useEffect, useLayoutEffect, useRef } from 'react';
import * as s from './Main.style';

import Nft from './Nft/Nft';
import Story from './Story/Story';
import Team from './Team/Team';
import RaodMap2 from './RoadMap2/RaodMap2';
import RaodMap from './RoadMap/RaodMap';
import Home from './Home/Home';

const Main = () => {
    return (
        <>
            <Home />
            <Nft />
            <Story />
            <Team />
            <RaodMap2 />
        </>
    );
};

export default Main;
