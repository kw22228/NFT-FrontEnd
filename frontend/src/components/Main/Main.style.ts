import styled from 'styled-components';

export const MainSection = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 10rem;

    position: relative;
`;

export const Img = styled.div`
    background-color: #d9d9d9;

    width: 60%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextBox = styled.div`
    background-color: #d9d9d9;
    width: 60%;
    height: 20%;

    margin-top: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Ball = styled.div`
    background-color: #d9d9d9;
    padding: 8rem;
    border-radius: 50%;

    position: absolute;
    left: 90%;
    bottom: 55%;
`;
