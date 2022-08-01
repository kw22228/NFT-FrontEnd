import styled from 'styled-components';

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
    width: 15%;
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

export const Line = styled.div`
    height: 70%;
    border-right: 3px solid black;
    width: 1px;

    margin-top: 5rem;
    position: relative;
`;

export const BallImg = styled.div<{ bg: string }>`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%);
`;

export const Right = styled.div`
    position: absolute;
    left: 15%;
    height: 70%;

    display: flex;
    flex-wrap: nowrap;

    overflow: hidden;
    overflow-x: hidden;
    & > div:not(:last-child) {
        margin-right: 10rem;
    }
`;
