import styled from 'styled-components';

export const Section = styled.section`
    position: absolute;
    width: 100vw;
    height: 100vh;

    top: 0;
    left: 0;
`;
export const Container = styled.div`
    position: absolute;
    bottom: 10%;
    right: 5%;

    z-index: 99;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: transparent;
`;
