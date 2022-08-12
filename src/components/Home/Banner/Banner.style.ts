import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100vw;
    color: black;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.body};
    /* background-color: black; */

    position: relative;
`;
export const BannerContainer = styled.div<{ main: string }>`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.main});
    background-size: cover;

    position: relative;

    transition: background-image 1s ease;
`;

export const Character = styled.img`
    width: 25rem;
    height: auto;

    position: absolute;
    top: 2rem;
    right: 15%;

    transform: scaleX(-1);
`;

export const Wave = styled.img`
    position: absolute;
    width: 100vw;
    bottom: 0;
    z-index: 1;
`;
