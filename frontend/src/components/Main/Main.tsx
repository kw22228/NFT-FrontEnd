import React from 'react';
import * as s from './Main.style';

import Banner from './Banner/Banner';
import Nft from './Nft/Nft';
import Story from './Story/Story';
import Team from './Team/Team';
import RaodMap from './RoadMap/RaodMap';

const Main = () => {
    return (
        <>
            <Banner />
            <s.MainSection>
                <s.Img>image</s.Img>
                <s.TextBox>Text</s.TextBox>
                <s.Ball></s.Ball>
            </s.MainSection>
            <Nft />
            <Story />
            <Team />
            <RaodMap />
        </>
    );
};

export default Main;
