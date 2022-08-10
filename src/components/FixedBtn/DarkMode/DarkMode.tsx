import React, { useEffect, useRef } from 'react';
import * as s from './DarkMode.style';

import Lottie from 'lottie-react';
import darkmode from '../../../assets/lotties/darkmode-button4.json';
import { useRecoilState } from 'recoil';
import { IGoxo } from '../../../lib/types/Goxo';
import { upVariants } from '../../../lib/animation/framer-variants/fixedBtnVariants';
import { isDarkSelector } from '../../../lib/recoil/selector';

const DarkMode = ({ scrollHeight, percent }: IGoxo) => {
    const [isDark, setIsDark] = useRecoilState(isDarkSelector);
    const ref = useRef<any>();
    const customValue = {
        scrollHeight,
        percent,
        bottom: -170,
    };

    const handleClick = () => {
        const element = ref.current;
        const segment = isDark ? [160, 209] : [55, 160];

        element.playSegments(segment, true);

        setIsDark(prev => !prev);
    };

    useEffect(() => {
        const element = ref.current;
        const segment = isDark ? [80, 160] : [0, 55];

        element.playSegments(segment, true);
    }, []);

    return (
        <s.Container variants={upVariants} initial="initial" animate="up" custom={customValue}>
            <s.Lottie onClick={handleClick}>
                <Lottie animationData={darkmode} lottieRef={ref} autoplay={false} loop={false} />
            </s.Lottie>
        </s.Container>
    );
};

export default DarkMode;
