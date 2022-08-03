import styled from 'styled-components';
import flag from '../../../assets/images/flag.svg';

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
    font-size: 1.5rem;
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
            cursor: pointer;

            width: 100px;
            height: 100px;
            background-color: black;
        }

        image {
            transition: all 0.3s ease;
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

export const BallImg = styled.div<{ bg: string }>`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%); */
`;

export const Right = styled.div`
    position: absolute;
    left: 20%;
    height: 70%;

    display: flex;
    flex-wrap: nowrap;

    overflow: hidden;
    overflow-x: hidden;
    /* & > div:not(:last-child) {
        margin-right: 10rem;
    } */
`;
