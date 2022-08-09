import styled from 'styled-components';

export const Overlay = styled.div<{ visible: boolean }>`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;

    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    opacity: ${props => (props.visible ? 1 : 0)};

    transition: visibility 0.5s ease, opacity 0.5s ease;
`;
