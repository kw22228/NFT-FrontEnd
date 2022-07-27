import React, { useLayoutEffect, useRef } from 'react';
import * as s from './RoadMap.style';

import bg from '../../../assets/images/main.jpg';
import GsapRoadMap2 from '../../../lib/animation/gsap/GsapRoadMap2';
import { RoadMapVariants } from '../../../lib/animation/variants/inViewVariant';
import { useInView } from 'framer-motion';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';

interface IRoadMapItem {
    title: string;
    content: string;
    index: number;
    // addToRefs: (el: HTMLDivElement) => void;
}
const RoadMapItem = ({ title, content, index }: IRoadMapItem) => {
    return (
        <s.ItemWrapper>
            <div></div>
            <s.Item //
                bg={bg}
                variants={RoadMapVariants}
                initial="initial"
                whileInView="onViewport"
                viewport={{
                    once: false,
                    amount: 0.6,
                }}
            >
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

    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.7,
    });

    useViewportNavState(isInView, 'roadmap');
    GsapRoadMap2({ sectionRef, scrollRef });

    return (
        <s.Section ref={sectionRef} className="roadmap" id="roadmap" data-scroll-section>
            <s.Left>
                <s.LeftTitle>RoadMap</s.LeftTitle>
            </s.Left>
            <s.Right ref={scrollRef}>
                {new Array(4).fill(0).map((e, i) => (
                    <RoadMapItem
                        title="METAVERSE"
                        content="OFFLINE PLACE 간의 경계를 허물며"
                        index={i}
                        key={i}
                        // addToRefs={addToRefs}
                    />
                ))}
            </s.Right>
        </s.Section>
    );
};

export default RaodMap2;
