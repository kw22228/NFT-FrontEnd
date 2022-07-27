import React from 'react';
import Logo from '../Logo/Logo';
import * as s from './Footer.style';

const Footer = () => {
    return (
        <s.Footer>
            <Logo />
            <s.TextWrap>
                <s.Copy>COPYRIGHT © OH, LOLLY DAY! all rights reserved.</s.Copy>
                <s.Url>hello@oh-lolly-day.com</s.Url>
            </s.TextWrap>
            <s.SnsWrap>
                <a href="#">dd</a>
                <a href="#">dd</a>
                <a href="#">dd</a>
                <a href="#">dd</a>
            </s.SnsWrap>
        </s.Footer>
    );
};

export default Footer;
