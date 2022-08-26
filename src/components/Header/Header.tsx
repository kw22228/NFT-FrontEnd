import React, { useRef, useState } from 'react';
import Logo from '../Logo/Logo';
import * as s from './Header.style';
import MenuLink from './MenuLink/MenuLink';

import { scrollHeightAtom, visibleAtom } from '../../lib/recoil/atoms/index';

import { useRecoilState, useRecoilValue } from 'recoil';
import SnsMenu from './MenuLink/SnsMenu/SnsMenu';

const Header = () => {
    const scrollHeight = useRecoilValue(scrollHeightAtom);
    const [visible, setVisible] = useRecoilState(visibleAtom);

    const ref = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

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
        <>
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
                        <MenuLink title="HOME" link="home" line="home" isScroll={true} />
                        <MenuLink title="NFT" link="nft" line="nft" isScroll={true} />
                        <MenuLink title="STORY" link="story" line="story" isScroll={true} />
                        <MenuLink title="ROADMAP" link="roadmap" line="roadmap" isScroll={true} />
                        <MenuLink title="TEAM" link="team" line="team" isScroll={true} />

                        <s.MenuSpace />

                        <MenuLink title="GALLARY" link="gallary/all" line="gallary" />
                        <MenuLink title="MINT" link="mint" line="mint" />
                    </s.Menu>

                    <s.Right>
                        <SnsMenu />

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
                        <MenuLink
                            title="HOME"
                            link="home"
                            line="home"
                            isScroll={true}
                            isMobile={true}
                        />
                        <MenuLink
                            title="NFT"
                            link="nft"
                            line="nft"
                            isScroll={true}
                            isMobile={true}
                        />
                        <MenuLink
                            title="STORY"
                            link="story"
                            line="story"
                            isScroll={true}
                            isMobile={true}
                        />
                        <MenuLink
                            title="ROADMAP"
                            link="roadmap"
                            line="roadmap"
                            isScroll={true}
                            isMobile={true}
                        />
                        <MenuLink
                            title="TEAM"
                            link="team"
                            line="team"
                            isScroll={true}
                            isMobile={true}
                        />

                        <s.MenuLine />

                        <MenuLink title="GALLARY" link="gallary" line="gallary" isMobile={true} />
                        <MenuLink title="MINT" link="mint" line="mint" isMobile={true} />
                    </s.MenuWrap>
                    <s.MenuFooter>
                        <SnsMenu />
                        <s.CopyRight>
                            COPYRIGHT © OH, LOLLY DAY!all rights reserved.
                            <br />
                            hello@oh-lolly-day.com
                        </s.CopyRight>
                    </s.MenuFooter>
                </s.MobileMenuWrap>
            </s.MobileMenuContainer>
        </>
    );
};

export default Header;
