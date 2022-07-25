import React, { useRef } from 'react';
import * as s from './Header.style';

import Logo from '../Logo/Logo';
import MenuLink from './MenuLink/MenuLink';
import GsapHeader from '../../lib/animation/gsap/GsapHeader';

const Header = () => {
    const ref = useRef(null);
    const navRef = useRef(null);
    GsapHeader({ ref, navRef });

    return (
        <s.Header ref={ref} id="header">
            <s.Nav ref={navRef}>
                <Logo />

                <s.Menu>
                    <MenuLink title="HOME" link="home" isScroll={true} />
                    <MenuLink title="NFT" link="nft" isScroll={true} />
                    <MenuLink title="STORY" link="story" isScroll={true} />
                    <MenuLink title="TEAM" link="team" isScroll={true} />
                    <MenuLink title="ROADMAP" link="roadmap" isScroll={true} />

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
