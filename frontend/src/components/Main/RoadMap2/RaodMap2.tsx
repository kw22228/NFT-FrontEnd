import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as s from './RoadMap.style';

import GsapRoadMap2 from '../../../lib/animation/gsap/GsapRoadMap2';
import { useInView } from 'framer-motion';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';
import Product from './Product/Product';

const RaodMap2 = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.7,
    });

    useViewportNavState(isInView, 'roadmap');
    // GsapRoadMap2({ sectionRef, scrollRef, leftRef });

    return (
        <s.Section ref={sectionRef} className="roadmap" id="roadmap">
            <s.Left ref={leftRef}>
                <s.LeftTitle>RoadMap</s.LeftTitle>
            </s.Left>
            <s.Right ref={scrollRef}>
                {new Array(4).fill(0).map((e, i) => (
                    <Product
                        title="METAVERSE"
                        content="OFFLINE PLACE 간의 경계를 허물며"
                        index={i}
                        key={i}
                    />
                ))}
            </s.Right>
        </s.Section>
    );
};

export default RaodMap2;
