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
    width: 20%;
    height: 100%;

    background-color: beige;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const LeftTitle = styled.h1`
    margin-top: 2rem;
`;

export const Right = styled.div`
    height: 70%;
    width: 80%;

    z-index: 1;

    display: flex;
    flex-wrap: nowrap;

    overflow: hidden;
    overflow-x: hidden;
    & > div:not(:last-child) {
        margin-right: 10rem;
    }
`;
