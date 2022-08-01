import React, { useRef } from 'react';
import GsapHeader from '../../lib/animation/gsap/GsapHeader';
import Logo from '../Logo/Logo';
import * as s from './Header.style';
import MenuLink from './MenuLink/MenuLink';

const Header = () => {
    const ref = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

    GsapHeader({ ref, navRef });
    return (
        <s.Header ref={ref} id="header" data-scroll data-scroll-sticky data-scroll-target=".Main">
            <s.Nav ref={navRef}>
                <Logo />

                <s.Menu>
                    <MenuLink title="HOME" link="home" isScroll={true} />
                    <MenuLink title="NFT" link="nft" isScroll={true} />
                    <MenuLink title="STORY" link="story" isScroll={true} />
                    <MenuLink title="ROADMAP" link="roadmap" isScroll={true} />
                    <MenuLink title="TEAM" link="team" isScroll={true} />

                    <s.MenuSpace />

                    <MenuLink title="GALLARY" link="gallary" />
                    <MenuLink title="MINT" link="mint" />
                </s.Menu>
                <s.SnsMenu>
                    <a href="#">d</a>
                    <a href="#">d</a>
                    <a href="#">d</a>
                    <a href="#">d</a>
                </s.SnsMenu>
            </s.Nav>
        </s.Header>
    );
};

export default Header;
