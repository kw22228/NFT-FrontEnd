import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { device } from '../../../styles/variouble';

export const Section = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #d53f41;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: relative;

    background-color: black;
`;
export const Left = styled.div`
    width: 20%;
    height: 100%;

    z-index: 10;

    background-color: transparent;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (${device.tabletXL}) {
        width: 25%;
    }
`;

export const LeftTitle = styled.h1`
    margin-top: 3rem;
    font-size: 1.5rem;

    color: ${props => props.theme.text};
`;

export const Line = styled.div`
    height: 70%;
    border-right: 3px solid black;
    width: 1px;

    margin-top: 5rem;
    position: relative;
`;

export const CurveLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    svg {
        position: absolute;
        width: 70%;
        height: 80%;

        text {
            fill: white;
            font-size: 1.5rem;
        }

        image {
            transition: all 0.2s ease;
            cursor: pointer;

            &:hover {
                opacity: 0.6;
            }
        }
    }
`;

export const Flag = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;

    position: absolute;
    top: 0;
    left: 0;
`;

export const CarImg = styled.div`
    width: 4rem;
    height: 4rem;
    position: relative;
`;

const Swing = keyframes`
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(5deg);
    }
    50%{
        transform: rotate(0deg);
    }
    75%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
`;
export const Car = styled.img<{ bg: string }>`
    width: 100%;
    height: 100%;

    animation: ${Swing} 0.7s linear infinite;
`;

export const Right = styled.div<{ width: number; zoomLevel: number }>`
    position: absolute;
    left: 20%;
    height: 70%;

    display: flex;
    flex-wrap: nowrap;

    overflow: hidden;
    overflow-x: hidden;
    & > div:not(:last-child) {
        margin-right: ${props => 5 * props.zoomLevel}rem;

        /* @media (${device.tabletXL}) {
            margin-right: 40rem;
        } */
    }
`;

export const Bottom = styled(motion.div)`
    width: 3rem;
    height: 3rem;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
    cursor: pointer;
`;

export const Grid = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    z-index: -1;

    img {
        width: 100%;
        height: 25%;
    }
`;
