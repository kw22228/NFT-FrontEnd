import styled from 'styled-components';
import variouble from '../../styles/variouble';

export const Section = styled.section`
    width: 100vw;
    height: calc(100vh - ${variouble.navHeight});

    padding-top: ${variouble.navHeight};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Mint = styled.button`
    padding: 2rem 3rem;

    cursor: pointer;
`;
