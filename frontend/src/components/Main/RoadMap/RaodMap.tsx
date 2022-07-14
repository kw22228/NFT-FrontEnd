import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import * as s from './RoadMap.style';

interface IRoadMapItem {
    addToRefs: (el: HTMLDivElement) => void;
}
const RoadMapItem = ({ addToRefs }: IRoadMapItem) => {
    return (
        <s.Item ref={addToRefs}>
            <s.ItemContainer>
                <s.Box></s.Box>
                <s.BallTop>
                    <s.RowLine />
                    <s.VerticalLine />
                    <s.Triangle />
                </s.BallTop>
            </s.ItemContainer>
        </s.Item>
    );
};
const RaodMap = () => {
    const ref = useRef<HTMLDivElement>(null);
    const revealRef = useRef<HTMLDivElement[]>([]);
    const addToRefs = (el: HTMLDivElement) => {
        if (el && !revealRef.current.includes(el)) {
            revealRef?.current.push(el);
        }
    };
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const element = ref.current;
        const length = element?.offsetHeight as number;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top-=30% top',
                end: 'bottom bottom',
                onUpdate: (self: any) => {
                    const draw = length * self.progress;
                    if (element !== null) {
                        element.style.height = `${draw}px`;
                    }
                },
            },
        });

        revealRef.current.forEach((el, index) => {
            tl.fromTo(
                el,
                {
                    y: 300,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,

                    scrollTrigger: {
                        trigger: el,
                        start: 'top-=450 center',
                        end: 'bottom-=450 center',
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
            <s.Title>RoadMap</s.Title>
            <s.Container>
                <s.Line ref={ref} />
                <s.Items>
                    <s.Item>&nbsp;</s.Item>
                    <RoadMapItem addToRefs={addToRefs} />
                    <RoadMapItem addToRefs={addToRefs} />
                    <RoadMapItem addToRefs={addToRefs} />
                    <RoadMapItem addToRefs={addToRefs} />
                    <RoadMapItem addToRefs={addToRefs} />
                    <RoadMapItem addToRefs={addToRefs} />
                    <RoadMapItem addToRefs={addToRefs} />
                    <RoadMapItem addToRefs={addToRefs} />
                </s.Items>
            </s.Container>
            <s.Ball />
        </s.Section>
    );
};

export default RaodMap;
