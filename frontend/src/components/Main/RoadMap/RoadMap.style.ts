import styled from 'styled-components';

export const Section = styled.section`
    height: 220vh;
    width: 100vw;

    position: relative;
`;

export const Title = styled.h1`
    color: ${props => props.theme.body};
    text-transform: uppercase;
    margin: 2rem auto;
    border-bottom: 2px solid ${props => props.theme.body};
    width: fit-content;
`;

export const Container = styled.div`
    width: 74%;
    height: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Line = styled.div`
    width: 2px;
    height: 100%;
    background-color: ${props => props.theme.body};
    visibility: hidden;
    position: absolute;
    top: 0rem;
    left: 50%;
    transform: translateX(-50%);
`;

export const LineBall = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    background-color: white;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`;

export const Items = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > *:nth-of-type(2n) {
        justify-content: start;
    }

    & > *:nth-of-type(2n + 1) {
        justify-content: end;
    }
`;

export const Item = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    margin: 1rem auto;
`;

export const ItemContainer = styled.div`
    width: 40%;
    height: 100%;
    padding: 1rem;

    position: relative;
`;

export const Box = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.body};
    color: ${props => props.theme.accentColor};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BallTop = styled.div`
    background-color: #cbe586;
    padding: 1rem;
    border-radius: 50%;

    position: absolute;
    bottom: 83%;
    left: 50%;
    transform: translateX(-50%);

    img {
        width: 3rem;
        height: 3rem;

        position: absolute;

        bottom: 50%;
        left: 12%;
    }
`;

export const RowLine = styled.div`
    width: 10px;
    height: 2px;
    background-color: black;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const VerticalLine = styled.div`
    width: 1.5px;
    height: 30px;
    background-color: black;

    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
`;

export const Triangle = styled.div`
    width: 0;
    height: 0;

    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 13px solid black;
    border-right: 13px solid transparent;

    position: absolute;
    left: 50%;
    bottom: 100%;
`;

export const Ball = styled.div<{ bg: string }>`
    padding: 7rem;

    border-radius: 50%;

    position: absolute;
    top: 0;
    left: 5%;

    background-image: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
`;
