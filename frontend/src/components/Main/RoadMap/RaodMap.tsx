import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import * as s from './RoadMap.style';

const RoadMapItem = () => {
    return (
        <s.Item>
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

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const element = ref.current;
        const length = element?.offsetHeight as number;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top-=30% top',
                end: 'bottom bottom',
                onUpdate: self => {
                    const draw = length * self.progress;
                    if (element !== null) {
                        element.style.height = `${draw}px`;
                    }
                },
            },
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
                    <RoadMapItem />
                    <RoadMapItem />
                    <RoadMapItem />
                    <RoadMapItem />
                    <RoadMapItem />
                    <RoadMapItem />
                    <RoadMapItem />
                    <RoadMapItem />
                </s.Items>
            </s.Container>
            <s.Ball />
        </s.Section>
    );
};

export default RaodMap;
