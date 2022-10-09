import styled from 'styled-components';
import { IScrollHeight } from '../../lib/recoil/atoms/types';
import { device, variouble } from '../../styles/variouble';

export const Header = styled.header<{ scrollHeight: IScrollHeight }>`
    width: 100vw;
    height: ${variouble.navHeight};
    background-color: ${props =>
        Math.ceil(props.scrollHeight.progressY * 100) > 3
            ? props.theme.type === 'dark'
                ? 'rgba(0,0,0,0.6)'
                : 'rgba(0,0,0,0.6)'
            : 'transparent'};

    border-bottom: ${props =>
        Math.ceil(props.scrollHeight.progressY * 100) > 3
            ? props.theme.type === 'dark'
                ? '1px solid black'
                : '1px solid black'
            : 'none'};

    position: fixed;
    top: ${props =>
        props.scrollHeight.progressY !== 0 && props.scrollHeight.direction === 'down'
            ? '-' + variouble.navHeight
            : 0};
    left: 0;
    z-index: 99;

    transition: top 0.3s ease, background-color 0.3s ease;

    backdrop-filter: ${props =>
        Math.ceil(props.scrollHeight.progressY * 100) > 3 ? 'blur(4px)' : 'inherit'};

    box-sizing: border-box;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 85%;
    margin: 0 auto;

    @media (${device.tabletXL}) {
        width: 95%;
    }
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    @media (${device.tabletXL}) {
        display: none;
    }
`;

export const MenuSpace = styled.li`
    background-color: ${props => props.theme.headerText};
    margin-top: 5px;
    width: 2px;
    height: 1.2rem;
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

export const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Hamburgur = styled.div`
    width: 2rem;
    height: 2rem;

    background-color: white;
    border-radius: 50%;

    justify-content: center;
    align-items: center;

    cursor: pointer;

    display: none;

    margin-left: 2rem;

    transition: all 0.1s ease;
    &:hover {
        & > div {
            width: 60%;
            &::before {
                width: 60%;
                top: -0.25rem;
                height: 1.5px;
                left: -1.2px;
                transform: rotate(-45deg);
            }
            &::after {
                width: 60%;
                height: 1.5px;
                top: 0.27rem;
                left: -1.2px;
                transform: rotate(45deg);
            }
        }
    }

    &:active {
        transform: scale(0.9);
    }

    @media (${device.tabletXL}) {
        display: flex;
    }
`;

export const ThreeLine = styled.div`
    position: relative;
    background-color: black;
    width: 50%;
    height: 2px;
    transition: all 0.3s ease;

    &::before,
    &::after {
        content: '';
        background-color: black;
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        transition: all 0.2s ease;
    }

    &::before {
        top: -0.3rem;
    }
    &::after {
        top: 0.3rem;
    }
`;

export const MobileMenuContainer = styled.div<{ visible: boolean }>`
    background-color: ${props => props.theme.accentColor};
    height: 100vh;
    width: 35%;

    position: fixed;
    top: 0;

    left: ${props => (props.visible ? 'calc(100% - 35%)' : '100%')};

    z-index: 1001;

    transition: left 0.5s ease;

    @media (${device.tablet}) {
        width: 45%;
        left: ${props => (props.visible ? 'calc(100% - 45%)' : '100%')};
    }

    @media (${device.mobile}) {
        width: 55%;
        left: ${props => (props.visible ? 'calc(100% - 55%)' : '100%')};
    }

    @media (${device.mobileSM}) {
        width: 85%;
        left: ${props => (props.visible ? 'calc(100% - 85%)' : '100%')};
    }
`;

export const Cancle = styled.div`
    background-color: white;
    width: 2rem;
    height: 2rem;

    border-radius: 50%;

    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
        & > div {
            height: 2px;

            &::before {
                top: -0.25rem;
                width: 60%;
                height: 1.5px;
                left: 55%;
            }

            &::after {
                top: 0.25rem;
                width: 60%;
                height: 1.5px;
                left: 55%;
            }
        }
    }
`;

export const CrossLine = styled.div`
    position: relative;
    background-color: black;
    width: 60%;
    height: 0px;

    transition: all 0.2s ease;

    &::before,
    &::after {
        content: '';
        background-color: black;
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        transition: all 0.2s ease;
    }

    &::before {
        transform: rotate(-135deg);
    }
    &::after {
        transform: rotate(135deg);
    }
`;

export const MobileMenuWrap = styled.div`
    margin-top: 3rem;
    padding: 3rem;

    width: 100%;
    height: 100%;

    box-sizing: border-box;
`;

export const MenuWrap = styled.div`
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    height: 70%;
`;

export const MenuLine = styled.div`
    background-color: #729d0e;
    height: 2px;
    width: 100%;
`;

export const MenuFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-top: 2rem;

    & > div:first-child {
        margin: 0 0.5rem;
    }
`;
export const CopyRight = styled.div`
    margin-top: 0.5rem;
    font-size: 0.7rem;

    margin-left: 1rem;

    color: ${props => props.theme.text};
`;
