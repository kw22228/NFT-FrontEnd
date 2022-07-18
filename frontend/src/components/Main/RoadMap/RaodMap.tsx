import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import * as s from './RoadMap.style';

import flag from '../../../assets/images/flag.svg';
import golfBall from '../../../assets/images/ball.svg';

interface IRoadMapItem {
    addToRefs: (el: HTMLDivElement) => void;
    text: string;
}
const RoadMapItem = ({ addToRefs, text }: IRoadMapItem) => {
    return (
        <s.Item ref={addToRefs}>
            <s.ItemContainer>
                <s.Box>{text}</s.Box>
                <s.BallTop>
                    {/* <s.RowLine />
                    <s.VerticalLine />
                    <s.Triangle /> */}
                    <img src={flag} alt="flag" />
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
    // gsap.registerPlugin(ScrollTrigger);

    // useLayoutEffect(() => {
    //     const element = ref.current;
    //     const length = element?.offsetHeight as number;

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: element,
    //             start: 'top-=30% top',
    //             end: 'bottom bottom',
    //             onUpdate: (self: any) => {
    //                 const draw = length * self.progress;
    //                 if (element !== null) {
    //                     element.style.height = `${draw}px`;
    //                 }
    //             },
    //         },
    //     });

    //     revealRef.current.forEach((el, index) => {
    //         tl.fromTo(
    //             el,
    //             {
    //                 y: 300,
    //                 opacity: 0,
    //             },
    //             {
    //                 y: 0,
    //                 opacity: 1,

    //                 scrollTrigger: {
    //                     trigger: el,
    //                     start: 'top-=450 center',
    //                     end: 'bottom-=450 center',
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
            <s.Title>RoadMap</s.Title>
            <s.Container>
                <s.Line ref={ref} />
                <s.Items>
                    <s.Item>&nbsp;</s.Item>
                    <RoadMapItem
                        addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 "
                    />
                </s.Items>
            </s.Container>
            <s.Ball bg={golfBall} />
        </s.Section>
    );
};

export default RaodMap;
