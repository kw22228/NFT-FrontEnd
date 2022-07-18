import React from 'react';
import * as s from './Banner.style';

import waves from '../../../assets/images/waves.svg';
import main from '../../../assets/images/main.jpg';
import character from '../../../assets/images/banner_1.png';

const Banner = () => {
    return (
        <s.Section>
            <s.BannerContainer main={main}>
                <s.Character src={character} alt={character} />
            </s.BannerContainer>
            <s.Wave src={waves} alt="waves" />
        </s.Section>
    );
};

export default Banner;
