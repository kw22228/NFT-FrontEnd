import styled from 'styled-components';
import variouble from '../../styles/variouble';

export const Section = styled.section`
    width: 100vw;
    height: calc(100vh - ${variouble.navHeight});

    padding-top: ${variouble.navHeight};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const MintContainer = styled.div``;
export const Mint = styled.button`
    padding: 2rem 3rem;

    cursor: pointer;
`;

export const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Box = styled.div`
    background-color: white;

    width: 15rem;
    height: 10rem;

    &:not(:last-child) {
        margin-right: 0.5rem;
    }
`;
