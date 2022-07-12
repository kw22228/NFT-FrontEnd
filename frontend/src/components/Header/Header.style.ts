import styled from 'styled-components';
import variouble from '../../styles/variouble';

export const Header = styled.header`
    width: 100vw;
    height: ${variouble.navHeight};
    background-color: lightgray;
    position: relative;
    z-index: 99;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 80%;
    margin: 0 auto;
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;

export const MenuItem = styled.li`
    text-transform: uppercase;
    margin: 0 1.2rem;
    cursor: pointer;
`;

export const Button = styled.button`
    display: block;

    outline: none;
    border: none;

    padding: 1rem 2rem;
    border-radius: 50px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SnsMenu = styled.div`
    display: flex;
    margin: 0 1rem;
    a {
        background-color: black;
        width: 1rem;
        height: 1rem;

        &:not(:last-child) {
            margin-right: 0.5rem;
        }
    }
`;
