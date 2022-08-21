import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const Section = styled(motion.section)`
    width: 100vw;
    height: 100vh;

    z-index: 9999;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    background-color: steelblue;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    overflow: hidden;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Car = styled(motion.div)`
    position: relative;

    svg {
        width: 300px;
        height: auto;
    }
`;
export const move = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const CarWheel = styled.img<{ locate: string }>`
    width: 64px;
    height: auto;

    position: absolute;
    top: 86%;
    left: ${props => (props.locate === 'front' ? '76%' : '6%')};

    animation: ${move} 0.5s linear infinite;
`;

export const TextContainer = styled.div`
    position: absolute;

    top: 118%;
    left: 50%;
    width: 100%;

    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Text = styled.h1`
    /* margin-top: 2rem; */
    color: white;
    width: 63%;
    .spread {
        letter-spacing: 3px;
    }
`;

export const Progress = styled.span`
    color: white;
    margin-top: 1rem;
`;
