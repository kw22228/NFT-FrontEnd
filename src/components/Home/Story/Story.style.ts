import styled from 'styled-components';
import { device } from '../../../styles/variouble';

export const Section = styled.section`
    height: 250vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    background-color: #4788f4;
`;

export const Title = styled.h1`
    color: ${props => props.theme.text};
    font-weight: 800;
    text-transform: uppercase;
    margin-top: 5rem;
    border-bottom: 2px solid ${props => props.theme.text};
    width: fit-content;
`;

export const Ball = styled.div<{ bg: string; direct: string }>`
    padding: ${props => (props.direct === 'horizontal' ? '8rem' : '9rem')};
    border-radius: 50%;

    position: absolute;
    top: ${props => (props.direct === 'horizontal' ? '0%' : '35%')};
    left: ${props => (props.direct === 'horizontal' ? '75%' : '0%')};

    z-index: 10;

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

export const MoveImg = styled.img`
    width: 17%;
    height: auto;

    position: absolute;
    top: 35%;
    left: 2%;
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
