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

    color: ${props => props.theme.body};
`;

export const Copy = styled.h3``;

export const Url = styled.h3``;

export const SnsWrap = styled.div`
    width: 10rem;

    a {
        padding: 0.5rem;
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.body};

        &:not(:last-child) {
            margin-right: 1rem;
        }
    }
`;
