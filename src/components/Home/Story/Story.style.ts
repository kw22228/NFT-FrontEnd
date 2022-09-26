import styled from 'styled-components';
import { device, variouble } from '../../../styles/variouble';

export const Section = styled.section`
    height: 300vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    /* background-color: #90baff; */
    background-color: black;
    border: 1px solid black;

    padding-bottom: 3rem;

    @media (${device.mobileSM}) {
        height: 250vh;
    }
`;

export const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 0;
`;

export const Title = styled.h1`
    color: ${props => props.theme.text};
    font-size: ${variouble.fontxxl};
    font-weight: 800;
    text-transform: uppercase;
    margin-top: 5rem;
    /* border-bottom: 2px solid ${props => props.theme.text}; */
    width: fit-content;
    margin-bottom: 3rem;

    z-index: 1;
    @media (${device.tablet}) {
        font-size: ${variouble.fontxlx};
    }

    @media (${device.mobile}) {
        font-size: ${variouble.fontxl};
    }

    @media (${device.mobileM}) {
        font-size: ${variouble.fontlgxx};
    }

    @media (${device.mobileMx}) {
        font-size: ${variouble.fontlgx};
    }
`;

export const Galaxy1 = styled.img`
    position: absolute;
    bottom: 80%;
    right: 0;

    width: 30%;
    height: auto;
`;

export const Galaxy2 = styled.img`
    position: absolute;
    top: 50%;
    right: 70%;
`;

export const Galaxy3 = styled.img`
    position: absolute;
    top: 70%;
    left: 67%;
`;
