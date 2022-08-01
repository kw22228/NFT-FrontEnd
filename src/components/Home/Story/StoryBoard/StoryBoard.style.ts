import styled from 'styled-components';
import { motion } from 'framer-motion';

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
`;

export const TextBox = styled.div`
    width: 45%;
    height: 40%;
    color: ${props => props.theme.body};
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
`;
