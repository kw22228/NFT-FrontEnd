import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
`;

export const Title = styled.h1`
    color: black;
    text-transform: uppercase;
    margin: 0 auto;
    border-bottom: 2px solid black;
    width: fit-content;
`;

export const SliderContainer = styled.div`
    height: 80%;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .swiper-slide {
        background-color: #d9d9d9;
        color: black;

        padding: 6rem 0;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
