import React, { useLayoutEffect, useRef } from 'react';
import * as s from './Main.style';

import Banner from './Banner/Banner';
import Nft from './Nft/Nft';
import Story from './Story/Story';
import Team from './Team/Team';
import RaodMap from './RoadMap/RaodMap';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

import glofBall from '../../assets/images/ball.svg';

const Main = () => {
    const imgRef = useRef<HTMLDivElement>(null);
    const textBoxRef = useRef<HTMLDivElement>(null);

    // gsap.registerPlugin(ScrollTrigger);

    // useLayoutEffect(() => {
    //     const imgEl = imgRef.current;

    //     const tl = gsap.timeline();
    //     tl.fromTo(
    //         imgRef.current,
    //         {
    //             x: -300,
    //             opacity: 0,
    //         },
    //         {
    //             x: 0,
    //             opacity: 1,

    //             scrollTrigger: {
    //                 trigger: imgEl,
    //                 start: 'top-=200 center',
    //                 end: 'bottom-=200 center',
    //                 scrub: true,
    //             },
    //         }
    //     );
    //     tl.fromTo(
    //         textBoxRef.current,
    //         {
    //             x: -300,
    //             opacity: 0,
    //         },
    //         {
    //             x: 0,
    //             opacity: 1,

    //             scrollTrigger: {
    //                 trigger: textBoxRef.current,
    //                 start: 'top-=200 center',
    //                 end: 'bottom-=200 center',
    //                 scrub: true,
    //             },
    //         }
    //     );

    //     return () => {
    //         tl.kill();
    //     };
    // }, []);
    return (
        <>
            <Banner />
            <s.MainSection>
                <s.Img ref={imgRef}>image</s.Img>
                <s.TextBox ref={textBoxRef}>
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
                <s.Ball bg={glofBall}></s.Ball>
            </s.MainSection>
            <Nft />
            <Story />
            <Team />
            <RaodMap />
        </>
    );
};

export default Main;
