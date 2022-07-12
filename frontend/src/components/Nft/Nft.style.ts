import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    height: 50vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SliderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const SliderItem = styled.div`
    border: 2px solid gray;

    padding: 5rem;
    border-radius: 50%;
    margin-right: 1rem;

    white-space: nowrap;
    box-sizing: content-box;
`;
