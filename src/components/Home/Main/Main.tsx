import React, { useRef } from 'react';
import * as s from './Main.style';

import Banner from '../Banner/Banner';
import { bottomToTop } from '../../../lib/animation/framer-variants/revealVariants';
import { useInView } from 'framer-motion';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';

import goxoCharacter from '../../../assets/goxo_character.jpg';
import goxoBanner from '../../../assets/goxo_pink.jpg';

const Main = () => {
    const imgRef = useRef<HTMLDivElement>(null);
    const textBoxRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);

    const isInView = useInView(homeRef, {
        once: false,
        amount: 0.3,
    });
    useViewportNavState(isInView, 'home');
    return (
        <s.MainSection id="home" ref={homeRef}>
            <Banner />
            <s.MainContainer>
                <s.Img //
                    ref={imgRef}
                    variants={bottomToTop}
                    initial="initial"
                    whileInView="onViewport"
                    viewport={{
                        margin: '200px',
                        once: true,
                        amount: 0.1,
                    }}
                    bg={goxoBanner}
                />
                <s.TextBox //
                    ref={textBoxRef}
                    variants={bottomToTop}
                    initial="initial"
                    whileInView="onViewport"
                    viewport={{
                        margin: '200px',
                        once: true,
                        amount: 0.1,
                    }}
                >
                    10,000명의 못난이가 함께 만들어가는 행복한 메타버스 세계로 홀더분들을
                    초대합니다! 국내를 넘어 해외까지 #찐팬을 보유한 글로벌 캐릭터, 못난이와 함께하는
                    글로벌 NFT(PFP) 프로젝트!
                    <br />
                    <br />
                    이번 프로젝트는 클레이튼을 기반으로 1만개의 PFP를 발행하며, 2014년부터
                    온/오프라인 인프라를 기반으로 탄탄하게 성장하고 있는대한민국 브랜드,
                    오롤리데이와 NFT 홀더가 함께 만들어 나가는 커뮤니티 멤버십 형태로 구성됩니다.
                    <br />
                    <br />
                    METAVERSE - OFFLINE PLACE 간의 경계를 허물며 새로운 역사를 써갈 HAPPIER TOWN에서
                    새로운 경험과 특별한 혜택을 누려보세요!
                </s.TextBox>
                <s.Ball bg={goxoCharacter} data-scroll data-scroll-speed="-3"></s.Ball>
            </s.MainContainer>
        </s.MainSection>
    );
};

export default Main;
