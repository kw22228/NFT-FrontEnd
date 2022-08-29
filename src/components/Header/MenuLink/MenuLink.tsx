import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useNavigate, useMatch } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { navAtom, visibleAtom } from '../../../lib/recoil/atoms';
import * as s from './MenuLink.style';

interface IProps {
    title: string;
    link: string;
    line: string;
    isScroll?: boolean;
    isMobile?: boolean;
}
const MenuLink = ({ title, link, line, isScroll = false, isMobile = false }: IProps) => {
    const navState = useRecoilValue(navAtom);
    const setVisible = useSetRecoilState(visibleAtom);

    const match: boolean = line === navState;
    const navigate = useNavigate();
    const { scroll } = useLocomotiveScroll();

    const handleClick = () => {
        const href = isScroll ? '/' : `/${link}`;
        navigate(href);

        if (isMobile) {
            setVisible(prev => ({
                ...prev,
                overlay: false,
                mobileMenu: false,
            }));
        }

        if (isScroll) {
            const element =
                link === 'home' ? Number(0) : (document.querySelector('#' + link) as HTMLElement);

            scroll?.scrollTo(element, {
                offset: '0',
                duration: '1500',
                easing: [0.25, 0.0, 0.35, 1.0],
                // disableLerp: false,
            });
        }
    };

    return (
        <s.MenuItem match={match} onClick={handleClick}>
            {title}
        </s.MenuItem>
    );
};

export default MenuLink;
