import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { windowInfoAtom } from '../../lib/recoil/atoms';
import * as s from './Logo.style';

const Logo = () => {
    const { width: windowWidth, zoomLevel } = useRecoilValue(windowInfoAtom);
    const navigate = useNavigate();
    const { scroll } = useLocomotiveScroll();

    const handleClick = () => {
        navigate('/');

        scroll?.scrollTo(0, {
            offset: '0',
            duration: '1500',
            easing: [0.25, 0.0, 0.35, 1.0],
            // disableLerp: false,
        });
    };

    return (
        <s.LogoLink onClick={handleClick}>
            <s.Logo>
                {windowWidth} {zoomLevel}
            </s.Logo>
        </s.LogoLink>
    );
};

export default Logo;
