import React from 'react';
import * as s from './Banner.style';

import waves from '../../../assets/images/waves.svg';
import main from '../../../assets/images/main.jpg';
import main_dark from '../../../assets/images/main_dark.jpg';
import character from '../../../assets/images/banner_1.png';
import FixedBtn from '../../FixedBtn/FixedBtn';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../../../lib/recoil/atoms';

const Banner = () => {
    const isDark = useRecoilValue(isDarkAtom);

    return (
        <s.Section>
            <s.BannerContainer main={isDark ? main_dark : main}>
                {/* <s.Character src={character} alt={character} /> */}
                {/* <s.Wave src={waves} alt="waves" /> */}
            </s.BannerContainer>
        </s.Section>
    );
};

export default Banner;
