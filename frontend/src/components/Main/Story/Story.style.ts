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

export const Container = styled.div<{ direction?: String }>`
    display: flex;
    flex-direction: ${props => (props.direction === 'reverse' ? 'row-reverse' : 'row')};
    justify-content: center;
    align-items: center;

    width: 80%;
    height: calc(100% / 3);

    margin: 1rem auto;

    & > div:first-child {
        margin-right: ${props => (props.direction === 'reverse' ? '0' : '2rem')};
        margin-left: ${props => (props.direction === 'reverse' ? '2rem' : '0')};
    }
`;

export const ImgBox = styled.div`
    width: 45%;
    height: 70%;
    background-color: ${props => props.theme.body};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextBox = styled.div`
    width: 45%;
    height: 40%;
    color: ${props => props.theme.body};
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Ball = styled.div<{ bg: string }>`
    /* background-color: #f5f5f5; */

    padding: 10rem;
    border-radius: 50%;

    position: absolute;
    top: 25%;
    left: 0%;

    z-index: -1;

    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
`;
