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
                    {' '}
                    Where is My Ball ? Where is My Ball은 골프를 사랑하는 saki 들이 만들어가는 NFT
                    (PFP) 프로젝트 입니다. 5,000명의 독창적이고 개성있는 saki들과 함께 언제 어디서든
                    함께 할 수 있는 새로운 골프라이프로 초대합니다<div className=""></div>
                    <br />
                    <br />
                    Klaytn 기반으로 5,000개의 NFT를 발행합니다. 2019년부터 '골프'라는 스포츠가 지닌
                    기존의 이미지를 혁신시키고, 트렌디함, 자유분방함을 추구하는 브랜드, GOXO의
                    대표캐릭터 SAKI와 함께 5,000명의 홀더들에게 새로운 골프문화를 만들어 나가는
                    커뮤니티 멤버십 혜택을 제공합니다
                    <br />
                    WHERE IS MY BALL? '골프'라는 라이프스타일로 모인 5,000명의 SAKI들과 일상과
                    취미를 함께하세요.
                    <br />
                </s.TextBox>
                <s.Ball bg={goxoCharacter} data-scroll data-scroll-speed="-3"></s.Ball>
            </s.MainContainer>
        </s.MainSection>
    );
};

export default Main;
