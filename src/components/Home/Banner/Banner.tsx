import React from 'react';
import * as s from './Banner.style';

import { useRecoilValue } from 'recoil';
import { isDarkAtom, scrollHeightAtom } from '../../../lib/recoil/atoms';

import waves from '../../../assets/images/waves.svg';
import character from '../../../assets/images/banner_1.png';

import main from '../../../assets/images/main.jpg';
import main_dark from '../../../assets/images/main_dark.jpg';

import main_mobile from '../../../assets/images/main_mobile.jpg';
import main_dark_mobile from '../../../assets/images/main_dark_mobile.jpg';

const Banner = () => {
    const { windowWidth } = useRecoilValue(scrollHeightAtom);
    const isDark = useRecoilValue(isDarkAtom);

    const bgImage = isDark
        ? windowWidth > 552
            ? main_dark
            : main_dark_mobile
        : windowWidth > 552
        ? main
        : main_mobile;

    return (
        <s.Section>
            <s.BannerContainer main={bgImage}>
                {/* <s.Character src={character} alt={character} /> */}
                {/* <s.Wave src={waves} alt="waves" /> */}
            </s.BannerContainer>
        </s.Section>
    );
};

export default Banner;
