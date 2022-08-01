import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useNavigate } from 'react-router';
import * as s from './Logo.style';

const Logo = () => {
    const navigate = useNavigate();
    const { scroll } = useLocomotiveScroll();

    const handleClick = () => {
        navigate('/');
        const element = document.querySelector('#home') as HTMLElement;

        scroll.scrollTo(element, {
            offset: '0',
            duration: '1500',
            easing: [0.25, 0.0, 0.35, 1.0],
            // disableLerp: false,
        });
    };

    return (
        <s.LogoLink onClick={handleClick}>
            <s.Logo>Logo</s.Logo>
        </s.LogoLink>
    );
};

export default Logo;
