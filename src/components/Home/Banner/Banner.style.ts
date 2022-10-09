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
export const BannerContainer = styled.div`
    width: 100%;
    height: 100vh;

    position: relative;

    /* transition: background-image 1s ease; */
`;

export const Title = styled.div`
    text-transform: uppercase;
    position: absolute;
    top: 30%;
    left: 50%;

    transform: translateX(-35%);

    color: white;
    font-size: 5rem;

    /* text-shadow: 0px -6px 0 purple, 0px -6px 0 purple, 0px 6px 0 purple, 0px 6px 0 purple,
        -6px 0px 0 purple, 6px 0px 0 purple, -6px 0px 0 purple, 6px 0px 0 purple, -6px -6px 0 purple,
        6px -6px 0 purple, -6px 6px 0 purple, 6px 6px 0 purple, -6px 18px 0 purple,
        0px 18px 0 purple, 6px 18px 0 purple, 0 19px 1px rgba(0, 0, 0, 0.1),
        0 0 6px rgba(0, 0, 0, 0.1), 0 6px 3px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2),
        0 18px 18px rgba(0, 0, 0, 0.25), 0 24px 24px rgba(0, 0, 0, 0.2),
        0 36px 36px rgba(0, 0, 0, 0.15); */
    width: 100%;
`;

export const LogoTitle = styled(motion.img)`
    top: 20%;
    left: 47%;
    position: absolute;

    width: 18rem;
    height: auto;
`;

export const Car = styled(motion.div)`
    svg {
        width: 180px;
        height: auto;
    }

    position: absolute;
    top: 70%;
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
