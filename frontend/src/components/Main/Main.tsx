import React, { useLayoutEffect, useRef } from 'react';
import * as s from './Main.style';

import Banner from './Banner/Banner';
import Nft from './Nft/Nft';
import Story from './Story/Story';
import Team from './Team/Team';
import RaodMap from './RoadMap/RaodMap';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Main = () => {
    const imgRef = useRef<HTMLDivElement>(null);
    const textBoxRef = useRef<HTMLDivElement>(null);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const imgEl = imgRef.current;

        const tl = gsap.timeline();
        tl.fromTo(
            imgRef.current,
            {
                x: -300,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,

                scrollTrigger: {
                    trigger: imgEl,
                    start: 'top-=200 center',
                    end: 'bottom-=200 center',
                    scrub: true,
                },
            }
        );
        tl.fromTo(
            textBoxRef.current,
            {
                x: -300,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,

                scrollTrigger: {
                    trigger: textBoxRef.current,
                    start: 'top-=200 center',
                    end: 'bottom-=200 center',
                    scrub: true,
                },
            }
        );

        return () => {
            tl.kill();
        };
    }, []);
    return (
        <>
            <Banner />
            <s.MainSection>
                <s.Img ref={imgRef}>image</s.Img>
                <s.TextBox ref={textBoxRef}>Text</s.TextBox>
                <s.Ball></s.Ball>
            </s.MainSection>
            <Nft />
            <Story />
            <Team />
            <RaodMap />
        </>
    );
};

export default Main;
