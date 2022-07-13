import styled from 'styled-components';

export const Section = styled.section`
    min-height: 65vh;
    width: 100vw;
    color: black;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #d9d9d9;
    /* background-color: black; */

    position: relative;
`;

export const Wave = styled.img`
    position: absolute;
    width: 100vw;
    top: 95%;
    z-index: 1;
`;
