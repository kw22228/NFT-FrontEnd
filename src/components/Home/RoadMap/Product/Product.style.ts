import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../../../styles/variouble';

export const ItemWrapper = styled.div`
    aspect-ratio: 16/9;
    height: 100%;
    display: grid;
    grid-template-columns: 20vw 1fr 40vw;
    width: 100vw;

    box-sizing: border-box;

    @media (${device.tabletXL}) {
        grid-template-columns: 15vw 1fr 30vw;
    }
`;

export const Item = styled(motion.div)<{ bg: string }>`
    width: 100%;
    height: 100%;
    position: relative;
    will-change: transform;

    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    padding: 0 5rem;

    background-image: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Title = styled.h1`
    margin-bottom: 1rem;
`;
export const Content = styled.h3``;
