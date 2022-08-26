import styled from 'styled-components';
import { variouble } from '../../../styles/variouble';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
`;

export const Left = styled.div`
    width: 20rem;
    height: 40rem;
`;
export const LeftItems = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid black;
`;
export const BigCategory = styled.div`
    font-size: ${variouble.fontlg};
    text-transform: uppercase;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;

    padding: 2rem;
    margin-left: 1rem;
    width: 100%;
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Count = styled.span`
    text-transform: capitalize;
`;

export const Search = styled.input`
    background-color: transparent;

    border: none;
    border-bottom: 2px solid black;

    height: 2rem;

    position: relative;

    &::after {
        content: 'Number';
        font-size: 1rem;
        color: black;
        width: 3rem;
        height: 3rem;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const Gallary = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`;

export const Card = styled.div`
    height: 25rem;
    background-color: white;

    display: flex;
    flex-direction: column;

    border-radius: 30px;
`;

export const ImgContainer = styled.div<{ bg: string }>`
    height: 80%;

    background-image: url(${props => props.bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

export const HashContainer = styled.div`
    height: 20%;

    background-color: lightcyan;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Hash = styled.span`
    font-size: ${variouble.fontlg};
`;
