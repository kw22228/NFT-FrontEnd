import styled from 'styled-components';
import { device } from '../../../styles/variouble';

export const Section = styled.section`
    height: 200vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
`;

export const Title = styled.h1`
    color: ${props => props.theme.text};
    font-weight: 800;
    text-transform: uppercase;
    margin: 2rem auto;
    border-bottom: 2px solid ${props => props.theme.text};
    width: fit-content;
`;

export const Ball = styled.div<{ bg: string; direct: string }>`
    padding: ${props => (props.direct === 'horizontal' ? '8rem' : '9rem')};
    border-radius: 50%;

    position: absolute;
    top: ${props => (props.direct === 'horizontal' ? '0%' : '35%')};
    left: ${props => (props.direct === 'horizontal' ? '75%' : '0%')};

    z-index: -1;

    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (${device.tabletXL}) {
        padding: ${props => (props.direct === 'horizontal' ? '8rem' : '8rem')};
    }

    @media (${device.tablet}) {
        display: ${props => (props.direct === 'horizontal' ? 'block' : 'none')};
    }

    @media (${device.mobile}) {
        padding: 7rem;
    }
`;

export const Flag = styled.div`
    position: absolute;

    bottom: 10%;
    left: 85%;

    @media (${device.tablet}) {
        left: 80%;
    }

    @media (${device.mobileM}) {
        display: none;
    }
`;
