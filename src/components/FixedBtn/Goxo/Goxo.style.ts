import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Wrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;
    right: 0;
`;

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;
    right: 0;
`;

export const CircleImage = styled.div<{ bg: string; width?: number }>`
    width: ${props => (props.width ? `${props.width}rem` : '3.5rem')};
    height: ${props => (props.width ? `${props.width}rem` : '3.5rem')};
    border-radius: 50%;

    cursor: pointer;

    z-index: 99;

    background-image: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    transition: all 0.2s ease;

    &:active {
        transform: scale(0.7);
    }
`;

export const Title = styled.div<{ child: boolean }>`
    font-size: ${props => (props.child ? '0.5rem' : '0.7rem')};
    font-weight: 600;

    mix-blend-mode: difference;
    color: white;
`;
