import styled from 'styled-components';
import { variouble } from '../../../styles/variouble';

export const Container = styled.div<{ visible: boolean }>`
    position: fixed;
    left: calc(50% - (5rem * 2));
    top: ${props => (props.visible ? '90%' : '100%')};

    background-color: black;
    z-index: 99;
    color: white;
    padding: 1rem 5rem;

    border-radius: 20px;

    transition: top 0.3s ease;

    cursor: pointer;
`;

export const Text = styled.span`
    font-size: ${variouble.fontmd};
    font-weight: bold;
`;

export const Cancle = styled.div`
    width: 1.5rem;
    height: 1.5rem;

    background-color: white;
    border-radius: 50%;

    position: absolute;
    left: 95%;
    bottom: 70%;

    display: flex;
    justify-content: center;
    align-items: center;
`;
