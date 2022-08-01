import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Section = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #d53f41;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: relative;
`;
export const Left = styled.div`
    width: 20%;
    height: 100%;
    z-index: 10;

    background-color: beige;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const LeftTitle = styled.h1`
    margin-top: 2rem;
`;

export const Right = styled.div<{ len: number }>`
    position: absolute;
    left: 20%;
    height: 80vh;

    /* padding: 10vh 0; */
    width: ${props => `${props.len * 100}%`};
    display: flex;
    flex-wrap: nowrap;

    overflow: hidden;
    overflow-x: hidden;

    & > div:not(:last-child) {
        margin-right: 10%;
    }
`;

export const ItemWrapper = styled.div`
    aspect-ratio: 16/9;
    height: 100%;
    display: grid;
    grid-template-columns: 15vw 1fr 8vw;
    width: 100vw;

    box-sizing: border-box;
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
