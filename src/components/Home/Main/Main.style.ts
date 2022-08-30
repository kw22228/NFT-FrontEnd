import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../../styles/variouble';

export const MainSection = styled.section`
    width: 100vw;
    height: 110vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: relative;

    /* @media (${device.mobileM}) {
        height: 220vh;
    } */
    /* background-color: #90baff; */
    background-color: #000000;
    outline: 3px solid black;
    box-sizing: border-box;
`;

export const Img = styled(motion.div)<{ bg: string }>`
    width: 25rem;
    height: 25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;

    @media (${device.mobile}) {
        width: 20rem;
        height: 20rem;
    }

    @media (${device.mobileSM}) {
        width: 18rem;
        height: 18rem;
    }
`;

export const BigTitle = styled(motion.h1)`
    margin-top: 3rem;

    text-transform: uppercase;
    color: ${props => props.theme.text};

    font-size: 3.5rem;
    letter-spacing: 2px;
`;

export const SubTitle = styled(motion.h3)`
    margin-top: 3rem;
    text-transform: uppercase;
    color: ${props => props.theme.text};

    font-size: 2rem;
    letter-spacing: 1px;
`;

export const TextBox = styled(motion.div)`
    /* background-color: ${props => props.theme.body}; */
    color: ${props => props.theme.text};
    font-size: 1.2rem;
    width: 55%;
    height: 100%;
    text-align: center;
    line-height: 1.8;
    letter-spacing: 1px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    margin-top: 3rem;

    transition: color 0.3s ease;

    @media (${device.tabletXL}) {
        width: 55%;
    }

    @media (${device.tablet}) {
        width: 60%;
    }

    @media (${device.mobile}) {
        width: 70%;
        margin-top: 6.5rem;
    }

    @media (${device.mobileM}) {
        width: 80%;
        margin-top: 7.5rem;
    }

    @media (${device.mobileSM}) {
        font-size: 0.85rem;
    }
`;

export const Ball = styled.div<{ bg: string }>`
    /* background-color: #d9d9d9; */
    padding: 8rem;
    border-radius: 50%;

    position: absolute;
    left: 80%;
    bottom: 35%;

    background-image: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    z-index: -1;

    @media (${device.mobileM}) {
        display: none;
    }
`;
