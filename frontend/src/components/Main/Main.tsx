import React from 'react';
import * as s from './Main.style';

import Banner from './Banner/Banner';
import Nft from '../Nft/Nft';

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
        </>
    );
};

export default Main;
