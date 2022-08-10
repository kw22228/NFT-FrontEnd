import React from 'react';
import * as s from './Banner.style';

import waves from '../../../assets/images/waves.svg';
import main from '../../../assets/images/main.jpg';
import character from '../../../assets/images/banner_1.png';
import FixedBtn from '../../FixedBtn/FixedBtn';

const Banner = () => {
    return (
        <s.Section>
            <FixedBtn />

            <s.BannerContainer main={main}>
                {/* <s.Character src={character} alt={character} /> */}
                {/* <s.Wave src={waves} alt="waves" /> */}
            </s.BannerContainer>
        </s.Section>
    );
};

export default Banner;
