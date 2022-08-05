import React from 'react';
import Logo from '../Logo/Logo';
import * as s from './Footer.style';

import facebook from '../../assets/images/icons8-facebook.svg';
import instagram from '../../assets/images/icons8-instagram.svg';
import linkedin from '../../assets/images/icons8-linkedin.svg';
import twitter from '../../assets/images/icons8-twitter.svg';

const Footer = () => {
    return (
        <s.Footer id="footer">
            <Logo />
            <s.TextWrap>
                <s.Copy>COPYRIGHT © OH, LOLLY DAY! all rights reserved.</s.Copy>
                <s.Url>hello@oh-lolly-day.com</s.Url>
            </s.TextWrap>
            <s.SnsWrap>
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
            </s.SnsWrap>
        </s.Footer>
    );
};

export default Footer;
