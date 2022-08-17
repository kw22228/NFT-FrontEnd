import { Variants } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { scrollUpVariants } from '../../../lib/animation/framer-variants/fixedBtnVariants';
import { IScrollHeight } from '../../../lib/recoil/atoms/types';
import * as s from './ScrollToUp.style';

const ScrollToUp = ({ scrollHeight }: { scrollHeight: IScrollHeight }) => {
    const pathRef = useRef<SVGPathElement>(null);
    const { scroll } = useLocomotiveScroll();

    const clickHandler = () => {
        scroll.scrollTo(0, {
            offset: '0',
            duration: '1500',
            easing: [0.25, 0.0, 0.35, 1.0],
            // disableLerp: false,
        });
    };

    useEffect(() => {
        const pathEl = pathRef.current as SVGPathElement;
        const pathLength = pathEl.getTotalLength();

        pathEl.style.strokeDasharray = String(pathLength);

        const draw = pathLength * scrollHeight.progressY;

        pathEl.style.strokeDashoffset = String(-(pathLength - draw));
    }, [scrollHeight.progressY]);

    return (
        <s.Wrapper //
            onClick={clickHandler}
            variants={scrollUpVariants}
            initial="initial"
            animate="visible"
            whileHover="hover"
            exit="exit"
        >
            <s.Arrow>&#x2191;</s.Arrow>
            <svg viewBox="0 0 124 124">
                <path //
                    ref={pathRef}
                    fill="none"
                    d="M2,62a60,60 0 1,0 120,0a60,60 0 1,0 -120,0"
                ></path>
            </svg>
        </s.Wrapper>
    );
};

export default ScrollToUp;
