import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../../../styles/variouble';

export const Container = styled(motion.div)<{ direction?: String }>`
    display: flex;
    flex-direction: ${props => (props.direction === 'reverse' ? 'row-reverse' : 'row')};
    justify-content: center;
    align-items: center;

    width: 80%;
    height: calc(100% / 3);

    margin: 1rem auto;

    & > div:first-child {
        margin-right: ${props => (props.direction === 'reverse' ? '0' : '2rem')};
        margin-left: ${props => (props.direction === 'reverse' ? '2rem' : '0')};

        @media (${device.tablet}) {
            margin: 0;
            margin-top: 2rem;
        }
    }

    @media (${device.tablet}) {
        flex-direction: column;
    }
`;

export const ImgBox = styled.div<{ bg: string }>`
    width: 25%;
    height: 70%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    background-color: transparent;

    @media (${device.tablet}) {
        width: 35%;
    }

    @media (${device.mobile}) {
        width: 45%;
    }

    @media (${device.mobileM}) {
        width: 55%;
    }
`;

export const TextBox = styled.div`
    width: 45%;
    height: 40%;
    color: ${props => props.theme.text};
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: color 0.3s ease;

    @media (${device.tablet}) {
        width: 60%;
    }

    @media (${device.mobileM}) {
        width: 80%;
    }

    @media (${device.mobileSM}) {
        width: 90%;
    }
`;
