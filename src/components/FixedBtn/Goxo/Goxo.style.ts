import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;

    right: 4rem;
    bottom: 8rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CircleImage = styled.div<{ bg: string }>`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    cursor: pointer;

    z-index: 99;

    background-image: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Title = styled.div`
    font-weight: 600;

    mix-blend-mode: difference;
    color: white;
`;
