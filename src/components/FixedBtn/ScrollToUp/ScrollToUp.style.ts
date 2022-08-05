import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    position: fixed;
    bottom: 3rem;
    right: 5rem;

    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    background-color: #406eff;

    cursor: pointer;

    z-index: 999;

    font-family: initial;

    &::before {
        content: '';
        position: absolute;

        border: 2px solid #406eff;
        border-radius: 50%;

        width: 0rem;
        height: 0rem;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: transparent;

        transition: all 0.2s ease;
    }

    &:hover {
        &::before {
            width: 4.5rem;
            height: 4.5rem;
        }
    }
`;

export const Arrow = styled.div`
    font-size: 2rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);

    color: #d9d9d9;
`;
