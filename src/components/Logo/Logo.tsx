import React from 'react';
import * as s from './Logo.style';

import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useNavigate } from 'react-router';

import LogoImage from '../../assets/images/Logo.svg';
import {
    logoChildren,
    logoStagger,
    titleLogo,
} from '../../lib/animation/framer-variants/revealVariants';

interface IProps {
    place?: string;
}

const TitleItem = ({ char }: { char: string }) => {
    return (
        <s.Char //
            variants={logoChildren}
        >
            {char}
        </s.Char>
    );
};
const Logo = ({ place = 'header' }: IProps) => {
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
            <s.Title place={place} variants={logoStagger} initial="initial" animate="animate">
                <TitleItem char="W" />
                <TitleItem char="I" />
                <TitleItem char="M" />
                <TitleItem char="B" />
            </s.Title>
            <s.Logo
                src={LogoImage}
                alt="Logo"
                variants={titleLogo}
                initial="initial"
                animate="animate"
            />
        </s.LogoLink>
    );
};

export default Logo;
