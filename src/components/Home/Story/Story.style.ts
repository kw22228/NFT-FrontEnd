import styled from 'styled-components';

export const Section = styled.section`
    height: 200vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
`;

export const Title = styled.h1`
    color: ${props => props.theme.body};
    font-weight: 800;
    text-transform: uppercase;
    margin: 2rem auto;
    border-bottom: 2px solid ${props => props.theme.body};
    width: fit-content;
`;

export const Ball = styled.div<{ bg: string }>`
    /* background-color: #f5f5f5; */

    padding: 10rem;
    border-radius: 50%;

    position: absolute;
    top: 35%;
    left: 0%;

    z-index: -1;

    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
`;
