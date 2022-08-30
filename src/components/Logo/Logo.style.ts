import { motion } from 'framer-motion';
import styled from 'styled-components';
import { variouble } from '../../styles/variouble';

export const LogoLink = styled.div`
    width: auto;
    height: 4.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.6;
    }
`;
export const Title = styled(motion.div)<{ place: string }>`
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 2px;

    transition: color 0.2s ease;
    color: ${props => (props.place === 'footer' ? 'white' : props.theme.headerText)};

    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Char = styled(motion.h1)``;

export const Logo = styled(motion.img)`
    width: 100%;
    height: 100%;
`;
