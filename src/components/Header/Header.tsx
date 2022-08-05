import React, { useRef } from 'react';
import GsapHeader from '../../lib/animation/gsap/GsapHeader';
import Logo from '../Logo/Logo';
import * as s from './Header.style';
import MenuLink from './MenuLink/MenuLink';

import facebook from '../../assets/images/icons8-facebook.svg';
import instagram from '../../assets/images/icons8-instagram.svg';
import linkedin from '../../assets/images/icons8-linkedin.svg';
import twitter from '../../assets/images/icons8-twitter.svg';

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
                    <a href="#">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="#">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="twitter" />
                    </a>
                </s.SnsMenu>
            </s.Nav>
        </s.Header>
    );
};

export default Header;
