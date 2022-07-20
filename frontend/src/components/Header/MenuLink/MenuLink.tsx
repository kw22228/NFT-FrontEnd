import React, { useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { navAtom } from '../../../lib/recoil/atoms';
import delay from '../../../lib/utils/delay';
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
        delay(() => {
            if (scroll) {
                const element = document.querySelector('#' + link) as HTMLElement;
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }
        }, 0);
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
