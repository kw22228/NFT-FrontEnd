import React from 'react';
import { useNavigate } from 'react-router';
import * as s from './MenuLink.style';

interface IProps {
    title: string;
    link: string;
    isScroll?: boolean;
    matchValue?: string;
}
const MenuLink = ({ title, link, isScroll = false }: IProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const href = isScroll ? '/' : `/${link}`;
        navigate(href);
        // delay(() => {
        //     if (isScroll) {
        //         const element = document.querySelector('#' + link) as HTMLElement;

        //         scroll.scrollTo(element, {
        //             offset: '0',
        //             duration: '1500',
        //             easing: [0.25, 0.0, 0.35, 1.0],
        //             // disableLerp: false,
        //         });
        //     }
        // }, 150);
    };

    return <s.MenuItem onClick={handleClick}>{title}</s.MenuItem>;
};

export default MenuLink;
