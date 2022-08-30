import styled from 'styled-components';

export const MenuItem = styled.li<{ match?: boolean }>`
    text-transform: uppercase;
    font-weight: 800;
    margin: 0 1.2rem;
    cursor: pointer;

    color: ${props => props.theme.headerText};

    position: relative;

    transition: all 0.3s ease;

    &::before {
        content: ' ';
        border-bottom: 2px solid ${props => props.theme.headerText};
        background-color: ${props => props.theme.headerText};
        height: 0.05rem;
        width: ${props => (props.match ? '100%' : '0')};

        position: absolute;
        top: 110%;

        transition: all 0.3s ease;
    }

    &:hover {
        opacity: 0.6;
    }
`;
