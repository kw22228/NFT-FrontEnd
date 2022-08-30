import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device, variouble } from '../../../../styles/variouble';

export const Container = styled(motion.div)<{ direction?: String }>`
    display: flex;
    /* flex-direction: ${props => (props.direction === 'reverse' ? 'row-reverse' : 'row')}; */
    justify-content: center;
    align-items: center;

    width: 40%;
    height: calc(100% / 4);

    margin: 3rem auto;

    background-color: #000000;

    border-radius: 30px;
    overflow: hidden;

    position: relative;

    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
        rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
        rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

    /* & > div:first-child {
        margin-right: ${props => (props.direction === 'reverse' ? '0' : '2rem')};
        margin-left: ${props => (props.direction === 'reverse' ? '2rem' : '0')};

        @media (${device.tablet}) {
            margin: 0;
            margin-top: 2rem;
        }
    }

    @media (${device.tablet}) {
        flex-direction: column;
    } */
`;

export const ImgBox = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0.4;

    /* @media (${device.tablet}) {
        width: 35%;
    }

    @media (${device.mobile}) {
        width: 45%;
    }

    @media (${device.mobileM}) {
        width: 55%;
    } */
`;

export const TextBox = styled.div`
    height: 100%;
    color: ${props => props.theme.text};
    font-weight: 800;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: color 0.3s ease;

    padding: 0 3rem;
    opacity: 1;
    z-index: 10;

    box-sizing: border-box;

    /* @media (${device.tablet}) {
        width: 60%;
    }

    @media (${device.mobileM}) {
        width: 80%;
    }

    @media (${device.mobileSM}) {
        width: 90%;
    } */
`;

export const Title = styled.h1``;

export const Text = styled.span`
    margin-top: 2rem;

    font-size: ${variouble.fontlg};
    line-height: 1.6;
    letter-spacing: 1px;
`;

export const Pin = styled.img``;
