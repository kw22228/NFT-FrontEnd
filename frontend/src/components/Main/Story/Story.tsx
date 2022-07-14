import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import * as s from './Story.style';

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

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const tl = gsap.timeline();
        ref.current.forEach((el, index) => {
            const dir = el.attributes[0].value;

            tl.fromTo(
                el,
                {
                    x: dir === 'row' ? -300 : 300,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,

                    scrollTrigger: {
                        trigger: el,
                        start: 'top-=200 center',
                        end: 'bottom-=200 center',
                        scrub: true,
                    },
                }
            );
        });

        return () => {
            tl.kill();
        };
    }, []);
    return (
        <s.Section>
            <s.Title>STORY</s.Title>
            <StoryBoard img="Image1" text="Text1" addToRefs={addToRefs} />
            <StoryBoard img="Image2" text="Text3" direction="reverse" addToRefs={addToRefs} />
            <StoryBoard img="Image3" text="Text3" addToRefs={addToRefs} />

            <s.Ball />
        </s.Section>
    );
};

export default Story;
