import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import { Ball } from '../Main.style';
import * as s from './Story.style';

import golfBall from '../../../assets/images/ball.svg';

interface IStoryBoard {
    img: string;
    text: string;
    direction?: string;
    addToRefs: (el: HTMLDivElement) => void;
}

const StoryBoard = ({ img, text, direction = 'row', addToRefs }: IStoryBoard) => {
    return (
        <s.Container direction={direction} ref={addToRefs}>
            <s.ImgBox>{img}</s.ImgBox>
            <s.TextBox>{text}</s.TextBox>
        </s.Container>
    );
};

const Story = () => {
    const ref = useRef<HTMLDivElement[]>([]);
    const addToRefs = (el: HTMLDivElement) => {
        if (el && !ref.current.includes(el)) {
            ref?.current.push(el);
        }
    };

    // gsap.registerPlugin(ScrollTrigger);

    // useLayoutEffect(() => {
    //     const tl = gsap.timeline();
    //     ref.current.forEach((el, index) => {
    //         const dir = el.attributes[0].value;

    //         tl.fromTo(
    //             el,
    //             {
    //                 x: dir === 'row' ? -300 : 300,
    //                 opacity: 0,
    //             },
    //             {
    //                 x: 0,
    //                 opacity: 1,

    //                 scrollTrigger: {
    //                     trigger: el,
    //                     start: 'top-=200 center',
    //                     end: 'bottom-=200 center',
    //                     scrub: true,
    //                 },
    //             }
    //         );
    //     });

    //     return () => {
    //         tl.kill();
    //     };
    // }, []);

    return (
        <s.Section>
            <s.Title>STORY</s.Title>
            <StoryBoard
                img="Image1"
                text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 
새로운 역사를 써갈 HAPPIER TOWN에서 
새로운 경험과 특별한 혜택을 누려보세요!"
                addToRefs={addToRefs}
            />
            <StoryBoard
                img="Image2"
                text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 
새로운 역사를 써갈 HAPPIER TOWN에서 
새로운 경험과 특별한 혜택을 누려보세요!"
                direction="reverse"
                addToRefs={addToRefs}
            />
            <StoryBoard
                img="Image3"
                text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 
새로운 역사를 써갈 HAPPIER TOWN에서 
새로운 경험과 특별한 혜택을 누려보세요!"
                addToRefs={addToRefs}
            />

            <s.Ball bg={golfBall} />
        </s.Section>
    );
};

export default Story;
