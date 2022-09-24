import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    /* background-color: #192c7d; */

    position: relative;
`;

export const Background = styled.video`
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;

    object-fit: cover;
`;

export const Title = styled.h1`
    color: ${props => props.theme.text};
    text-transform: uppercase;
    margin-top: 5rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid ${props => props.theme.text};
    width: fit-content;
`;

export const Container = styled(motion.div)`
    width: 74%;
    height: 70%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    /* margin-top: -3rem; */
`;

export const Card = styled(motion.div)`
    background-color: white;
    width: 25%;
    height: 70%;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    overflow: hidden;

    opacity: 0.6;

    &:not(:last-child) {
        margin-right: 1rem;
    }
`;
export const CardWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    padding: 2rem;
`;

export const CardImg = styled.img`
    width: 100%;
    height: 75%;

    border-radius: 20px;

    z-index: 10;

    opacity: 0.9;
    backdrop-filter: blur(4px);
`;

export const CardContents = styled.div`
    width: 100%;
    height: 25%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;
`;

export const Name = styled.div``;

export const Job = styled.div`
    margin-top: 0.5rem;
`;
