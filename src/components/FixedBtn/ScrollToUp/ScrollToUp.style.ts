import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;

    background-color: #406eff;
    cursor: pointer;

    z-index: 999;

    font-family: initial;

    position: relative;

    margin-top: 1.5rem;

    position: absolute;
    bottom: 0;
    right: 0;

    transition: all 0.2s ease;

    svg {
        position: absolute;
        width: 3.5rem;
        height: 3.5rem;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
        path {
            stroke-width: 4;
            stroke: #f74628;
            transition: stroke-dashoffset 0.2s ease;
        }
    }

    &:active {
        transform: scale(0.8);
    }
`;

export const Arrow = styled.div`
    font-size: 2rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: white;
`;
