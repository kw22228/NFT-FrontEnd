import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
`;

export const Title = styled.h1`
    color: ${props => props.theme.body};
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 auto;
    border-bottom: 2px solid ${props => props.theme.body};
    width: fit-content;
`;

export const SliderContainer = styled.div`
    height: 70%;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .swiper-slide {
        background-color: ${props => props.theme.body};
        color: black;

        padding: 8rem 0;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const OpenSea = styled.button`
    padding: 0.6rem 2rem;
    border-radius: 20px;
    border: 0;
    outline: 0;
    font-weight: 800;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 1.5rem;
        height: 1.5rem;

        margin-right: 0.5rem;
    }
`;
