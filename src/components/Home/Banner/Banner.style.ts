import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100vw;
    color: black;

    display: flex;
    justify-content: center;
    align-items: center;

    /* background-color: ${props => props.theme.body}; */
    /* background-color: black; */
    background-color: transparent;

    position: relative;
`;
export const BannerContainer = styled.div<{ main: string }>`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.main});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;

    position: relative;

    transition: background-image 1s ease;
`;

export const Car = styled(motion.div)`
    svg {
        width: 180px;
        height: auto;
    }

    position: absolute;
    top: 50%;
`;
export const move = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;
export const CarWheel = styled.img<{ locate: string; isRotate: boolean }>`
    width: 40px;
    position: absolute;
    top: 86%;
    left: ${props => (props.locate === 'front' ? '75%' : '5%')};

    animation: ${move} 0.5s linear infinite;
    animation-play-state: ${props => (props.isRotate ? 'running' : 'paused')};
`;

export const Character = styled.img`
    width: 25rem;
    height: auto;

    position: absolute;
    top: 2rem;
    right: 15%;

    transform: scaleX(-1);
`;

export const Wave = styled.img`
    position: absolute;
    width: 100vw;
    bottom: 0;
    z-index: 1;
`;
