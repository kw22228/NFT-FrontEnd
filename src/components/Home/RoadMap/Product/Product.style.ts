import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device, variouble } from '../../../../styles/variouble';

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

    /* background-color: rgba(255, 255, 255, 0.8); */
    background-color: black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    padding: 0 5rem;

    border: 1px solid #55d1b3;
    box-shadow: 0px 4px 27px 0px #55d1b3;

    border-radius: 10px;
    overflow: hidden;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0.5;

    z-index: -1;
`;

export const Title = styled.h1`
    margin-bottom: 1rem;
    color: white;
`;
export const Contents = styled.ul``;
export const List = styled.li`
    color: white;
    padding: 1rem 0;
    list-style: none;

    font-weight: 550;
    font-size: ${variouble.fontmd};
    letter-spacing: 0.1rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: relative;
`;
export const Flag = styled.img`
    width: 15px;
    margin-right: 0.5rem;
`;
