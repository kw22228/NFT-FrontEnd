import React, { useLayoutEffect, useRef } from 'react';
import * as s from './Header.style';

import Logo from '../Logo/Logo';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MenuLink from './MenuLink/MenuLink';
import { useRecoilState } from 'recoil';
import { navAtom } from '../../lib/recoil/atoms';

const Header = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    // useLayoutEffect(() => {
    //     const element = ref.current;

    //     const tl = gsap.timeline();
    //     tl.to(element, {
    //         position: 'fixed',
    //         top: '1rem',
    //         left: '50%',
    //         width: '80%',
    //         transform: 'translateX(-50%)',

    //         padding: '',
    //         borderRadius: '50px',
    //         border: '3px solid white',

    //         scrollTrigger: {
    //             trigger: element,
    //             start: 'bottom+=200 top',
    //             end: '+=200',
    //             scrub: true,
    //         },
    //     });

    //     return () => {
    //         tl.kill();
    //     };
    // }, []);

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
