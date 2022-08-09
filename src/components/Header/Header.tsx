import React, { useRef, useState } from 'react';
import Logo from '../Logo/Logo';
import * as s from './Header.style';
import MenuLink from './MenuLink/MenuLink';

import GsapHeader from '../../lib/animation/gsap/GsapHeader';
import { scrollHeightAtom, visibleAtom } from '../../lib/recoil/atoms/index';

import facebook from '../../assets/images/icons8-facebook.svg';
import instagram from '../../assets/images/icons8-instagram.svg';
import linkedin from '../../assets/images/icons8-linkedin.svg';
import twitter from '../../assets/images/icons8-twitter.svg';
import { useRecoilState, useRecoilValue } from 'recoil';

const Header = () => {
    const scrollHeight = useRecoilValue(scrollHeightAtom);
    const [visible, setVisible] = useRecoilState(visibleAtom);

    const ref = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

    GsapHeader({ ref, navRef });

    const hamburgurClick = () => {
        setVisible(prev => {
            return {
                ...prev,
                overlay: true,
                mobileMenu: true,
            };
        });
    };

    const cancleClick = () => {
        setVisible(prev => {
            return {
                ...prev,
                overlay: false,
                mobileMenu: false,
            };
        });
    };
    return (
        <section>
            <div id="sticky">
                <s.Header
                    ref={ref}
                    id="header"
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target=".Main"
                    scrollHeight={scrollHeight}
                >
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

                        <s.Right>
                            <s.SnsMenu>
                                <a href="#">
                                    <img src={facebook} alt="facebook" />
                                </a>
                                <a href="#">
                                    <img src={instagram} alt="instagram" />
                                </a>
                                {/* <a href="#">
                                <img src={linkedin} alt="linkedin" />
                            </a> */}
                                <a href="#">
                                    <img src={twitter} alt="twitter" />
                                </a>
                            </s.SnsMenu>

                            <s.Hamburgur onClick={hamburgurClick}>
                                <s.ThreeLine />
                            </s.Hamburgur>
                        </s.Right>
                    </s.Nav>
                </s.Header>

                <s.MobileMenuContainer
                    visible={visible.mobileMenu}
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target=".Main"
                >
                    <s.Cancle onClick={cancleClick}>
                        <s.CrossLine />
                    </s.Cancle>
                    <s.MobileMenuWrap>
                        <s.MenuWrap>
                            <MenuLink title="HOME" link="home" isScroll={true} />
                            <MenuLink title="NFT" link="nft" isScroll={true} />
                            <MenuLink title="STORY" link="story" isScroll={true} />
                            <MenuLink title="ROADMAP" link="roadmap" isScroll={true} />
                            <MenuLink title="TEAM" link="team" isScroll={true} />

                            <s.MenuLine />

                            <MenuLink title="GALLARY" link="gallary" />
                            <MenuLink title="MINT" link="mint" />
                        </s.MenuWrap>
                    </s.MobileMenuWrap>
                </s.MobileMenuContainer>
            </div>
        </section>
    );
};

export default Header;
