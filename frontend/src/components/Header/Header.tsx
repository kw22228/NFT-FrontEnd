import React, { useLayoutEffect, useRef } from 'react';
import * as s from './Header.style';

import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <s.Header //
            data-scroll
            data-scroll-sticky
            data-scroll-target=".Main"
        >
            <s.Nav>
                <Logo />

                <s.Menu>
                    <s.MenuItem>HOME</s.MenuItem>
                    <s.MenuItem>NFT</s.MenuItem>
                    <s.MenuItem>STORY</s.MenuItem>
                    <s.MenuItem>TEAM</s.MenuItem>
                    <s.MenuItem>ROADMAP</s.MenuItem>
                    <s.MenuItem>FAQ</s.MenuItem>

                    <s.SnsMenu>
                        <a href="#">d</a>
                        <a href="#">d</a>
                        <a href="#">d</a>
                        <a href="#">d</a>
                    </s.SnsMenu>
                </s.Menu>

                <s.Button>Connect Wallet</s.Button>
            </s.Nav>
        </s.Header>
    );
};

export default Header;
