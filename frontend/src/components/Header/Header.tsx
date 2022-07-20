import React, { useLayoutEffect, useRef } from 'react';
import * as s from './Header.style';

import Logo from '../Logo/Logo';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MenuLink from './MenuLink/MenuLink';
import { useRecoilState } from 'recoil';
import { navAtom } from '../../lib/recoil/atoms';
import GsapHeader from '../../lib/animation/gsap/GsapHeader';

const Header = () => {
    const ref = useRef(null);
    // GsapHeader({ ref });

    return (
        <s.Header ref={ref}>
            <s.Nav>
                <Logo />

                <s.Menu>
                    <MenuLink title="HOME" link="home" scroll={true} />
                    <MenuLink title="NFT" link="nft" scroll={true} />
                    <MenuLink title="STORY" link="story" scroll={true} />
                    <MenuLink title="TEAM" link="team" scroll={true} />
                    <MenuLink title="ROADMAP" link="roadmap" scroll={true} />

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
