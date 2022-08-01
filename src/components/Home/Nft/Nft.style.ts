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

        width: 8rem;
        height: 18rem;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        overflow: hidden;
    }
`;

export const Nft = styled.div<{ bg: string }>`
    width: 100%;
    height: 100%;

    background-image: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: cover;
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
