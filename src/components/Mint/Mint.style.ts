import styled from 'styled-components';
import { variouble } from '../../styles/variouble';

export const Section = styled.section`
    width: 100vw;
    height: 125vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    position: relative;

    background-color: #fbf798;
`;

export const Container = styled.div`
    width: 100%;
    height: 80%;
    background-color: #cce886;

    border-radius: 0 0 0 40%;
    display: flex;
`;

//Left Container
export const Left = styled.div`
    margin-top: ${variouble.navHeight};
    width: 45%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: relative;
    svg {
        circle {
            fill: #fbf798;
            filter: blur(2px);
        }
    }
`;

export const Character = styled.img`
    width: 15rem;
    height: auto;

    position: absolute;
    top: 52%;
    left: 20%;
`;

export const PinBall = styled.img`
    width: 2rem;
    height: auto;

    position: absolute;
    top: 100%;
    left: 80%;
`;

// -- Left Container

//Right Container
export const Right = styled.div`
    margin-top: ${variouble.navHeight};
    padding: 3rem 0;
    width: 38%;

    display: flex;
    flex-direction: column;
`;

//Main Title
export const Title = styled.h1`
    text-transform: capitalize;
`;
// -- Main Title

//Block Info Container
export const BlockInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 2rem;
`;
export const BlockInfo = styled.div``;
export const BlockTitle = styled.h3`
    text-transform: capitalize;
`;

export const BlockWrap = styled.div`
    display: flex;
    align-items: center;

    margin-top: 1rem;
`;
export const BlockImg = styled.img`
    margin-right: 1.5rem;
`;
export const BlockNumber = styled.h3<{ type: string }>`
    color: #016837;
    background-color: ${props => (props.type === 'current' ? '#FBF798' : 'transparent')};
    letter-spacing: 1px;

    border-radius: 8px;
    padding: 0.2rem;
`;
// -- Block Info Container

// Quantity
export const QuantityWrapper = styled.div`
    margin-top: 2rem;
`;
export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
    width: 100%;
`;
export const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const QuantityText = styled.h4``;
export const QuantityNumber = styled.h4``;

export const QuantityBar = styled.div`
    width: 100%;
    height: 2rem;

    background-color: #fbf798;
    border-radius: 10px;

    margin-top: 0.5rem;

    position: relative;
    overflow: hidden;
`;
export const QuantityProgress = styled.div<{ progress: number }>`
    position: absolute;
    top: 0;
    left: 0;

    background-color: #7ec119;
    width: ${props => (props.progress ? `${props.progress}%` : '0%')};
    height: 100%;

    transition: width 0.2s ease;
`;

export const QuantitySelectContainer = styled.div`
    margin-top: 1rem;
`;
export const SelectInfoText = styled.h4`
    text-transform: capitalize;
`;

export const Price = styled.h4`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: fit-content;
    background-color: #fbf798;
    padding: 0.3rem;
    border-radius: 10px;

    margin-top: 1rem;
    text-transform: capitalize;
`;
// -- Quantity

//MintButton
export const MintWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-top: 4rem;
`;

export const MintButton = styled.div`
    background-color: #6ca33d;
    color: ${props => props.theme.body};
    text-transform: uppercase;

    width: 23rem;
    height: 3rem;
    box-sizing: border-box;

    border-radius: 20px;

    font-size: ${variouble.fontlg};

    cursor: pointer;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MintFlag = styled.img`
    position: absolute;
    bottom: 70%;
    left: 5%;

    width: 3rem;
    height: 3rem;
`;
// -- MintButton
// -- Right Container
