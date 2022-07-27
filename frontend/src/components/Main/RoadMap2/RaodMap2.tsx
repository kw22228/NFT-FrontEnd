import React, { useLayoutEffect, useRef } from 'react';
import * as s from './RoadMap.style';

import bg from '../../../assets/images/main.jpg';
import GsapRoadMap2 from '../../../lib/animation/gsap/GsapRoadMap2';

interface IRoadMapItem {
    title: string;
    content: string;
    index: number;
    // addToRefs: (el: HTMLDivElement) => void;
}
const RoadMapItem = ({ title, content, index }: IRoadMapItem) => {
    return (
        <s.ItemWrapper className="roadmap-item">
            <div></div>
            <s.Item bg={bg}>
                <s.Title>{title}</s.Title>
                <s.Content>{content}</s.Content>
            </s.Item>
            <div></div>
        </s.ItemWrapper>
    );
};
const RaodMap2 = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    // const revealRef = useRef<HTMLDivElement[]>([]);
    // const addToRefs = (el: HTMLDivElement) => {
    //     if (el && !revealRef.current.includes(el)) {
    //         revealRef.current.push(el);
    //     }
    // };

    GsapRoadMap2({ sectionRef, scrollRef });

    return (
        <s.Section ref={sectionRef}>
            <s.Container ref={scrollRef}>
                {new Array(4).fill(0).map((e, i) => (
                    <RoadMapItem
                        title="METAVERSE"
                        content="OFFLINE PLACE 간의 경계를 허물며"
                        index={i}
                        key={i}
                        // addToRefs={addToRefs}
                    />
                ))}
            </s.Container>
        </s.Section>
    );
};

export default RaodMap2;
