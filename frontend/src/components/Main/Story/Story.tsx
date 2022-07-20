import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import { Ball } from '../Main.style';
import * as s from './Story.style';

import golfBall from '../../../assets/images/ball.svg';
import useViewportState from '../../../lib/hooks/useViewportState';
import GsapStory from '../../../lib/animation/gsap/GsapStory';

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
    const revealRef = useRef<HTMLDivElement[]>([]);
    const addToRefs = (el: HTMLDivElement) => {
        if (el && !revealRef.current.includes(el)) {
            revealRef?.current.push(el);
        }
    };
    // GsapStory({ revealRef });

    const storyRef = useRef<HTMLElement>(null);
    useViewportState(storyRef, 'story');

    return (
        <s.Section id="story" ref={storyRef}>
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
