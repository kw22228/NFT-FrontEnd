import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #d53f41;

    display: flex;
    align-items: center;
`;

export const Container = styled.div`
    height: 70vh;
    width: 800%;

    display: flex;
    flex-wrap: nowrap;
`;

export const ItemWrapper = styled.div`
    aspect-ratio: 16/9;
    height: 100%;
    display: grid;
    grid-template-columns: 25vw 1fr 350px;
    width: 100vw;
`;

export const Item = styled.div<{ bg: string }>`
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
