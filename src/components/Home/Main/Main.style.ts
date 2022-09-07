import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device, variouble } from '../../../styles/variouble';

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
    margin-top: 2rem;
    text-transform: uppercase;
    color: ${props => props.theme.text};

    font-size: 3.5rem;
    letter-spacing: 2px;

    @media (${device.tabletXL}) {
        /* margin-top: 0; */
    }

    @media (${device.mobile}) {
        font-size: ${variouble.fontxxl};
    }

    @media (${device.mobileM}) {
        font-size: ${variouble.fontxlx};
    }

    @media (${device.mobileMx}) {
        font-size: ${variouble.fontxl};
    }

    @media (${device.mobileSM}) {
        font-size: ${variouble.fontlgx};
    }
`;

export const SubTitle = styled(motion.h3)`
    margin-top: 3rem;
    text-transform: uppercase;
    color: ${props => props.theme.text};

    font-size: ${variouble.fontxl};
    letter-spacing: 1px;

    @media (${device.mobile}) {
        font-size: ${variouble.fontlgxx};
    }

    @media (${device.mobileM}) {
        font-size: ${variouble.fontlgx};
    }

    @media (${device.mobileSM}) {
        font-size: ${variouble.fontlg};
    }
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
        width: 65%;
    }

    @media (${device.tablet}) {
        width: 70%;
    }

    @media (${device.mobileXL}) {
        width: 80%;
    }

    @media (${device.mobile}) {
        width: 85%;
        font-size: 1rem;
    }

    @media (${device.mobileM}) {
        width: 90%;
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
