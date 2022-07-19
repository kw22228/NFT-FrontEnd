import React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { navAtom } from '../../../lib/recoil/atoms';
import * as s from './MenuLink.style';

interface IProps {
    title: string;
    link: string;
    scroll?: boolean;
    matchValue?: string;
}
const MenuLink = ({ title, link, scroll = false }: IProps) => {
    const [navState, setNavState] = useRecoilState(navAtom);
    const matchRoute = useMatch(link);
    const match: boolean = scroll ? navState === link : !!matchRoute;
    const navigate = useNavigate();

    const handleClick = () => {
        const href = scroll ? '/' : `/${link}`;
        navigate(href);

        if (scroll) {
            const top = document.querySelector('body') as HTMLElement;
            const element = document.querySelector('#' + link) as HTMLElement;
            top.scrollIntoView({
                behavior: 'auto',
                block: 'start',
                inline: 'nearest',
            });

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }

        setNavState(link);
    };
    return (
        <>
            <s.MenuItem match={match} onClick={handleClick}>
                {title}
            </s.MenuItem>
        </>
    );
};

export default MenuLink;
