import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100vw;
    height: 20vh;
    background-color: #57892b;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
`;

export const Copy = styled.h3``;

export const Url = styled.h3``;

export const SnsWrap = styled.div`
    display: flex;
    margin: 0 1rem;

    a {
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: all 0.3s ease;

        &:hover {
            opacity: 0.6;
        }

        svg {
            fill: white;
        }
    }
`;
