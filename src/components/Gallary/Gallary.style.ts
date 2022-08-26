import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { variouble } from '../../styles/variouble';

export const Section = styled.section`
    width: 100vw;
    min-height: 100vh;

    position: relative;

    background-color: #90baff;
`;
export const Container = styled.div`
    position: relative;
    top: ${variouble.navHeight};

    padding: 140px 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
export const Title = styled.h1`
    font-size: ${variouble.fontxxxl};
`;

export const Selector = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Switch = styled(Link)<{ type: string; match: string }>`
    margin-top: 5rem;

    font-size: ${variouble.fontxl};

    color: ${props => (props.type === props.match ? '#F26A8E' : 'black')};

    &:not(:last-child) {
        margin-right: 2rem;
    }
`;

export const ViewContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    margin-top: 3rem;
`;
