import styled from 'styled-components';

export const Section = styled.section`
    height: 60vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.h1`
    color: black;
    text-transform: uppercase;
    margin: 2rem auto;
    border-bottom: 2px solid black;
    width: fit-content;
`;

export const Container = styled.div`
    width: 74%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    background-color: #d9d9d9;
    width: 100%;
    height: 70%;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
        margin-right: 1rem;
    }
`;
