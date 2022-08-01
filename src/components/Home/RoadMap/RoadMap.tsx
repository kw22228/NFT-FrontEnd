import { useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import GsapRoadMap from '../../../lib/animation/gsap/GsapRoadMap';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';
import importAll from '../../../lib/utils/importAll';
import Product from './Product/Product';
import * as s from './RoadMap.style';

const RoadMap = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const lineRef = useRef<HTMLDivElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);

    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.7,
    });

    useViewportNavState(isInView, 'roadmap');
    GsapRoadMap({ sectionRef, scrollRef, lineRef, ballRef });

    const [page, setPage] = useState<number>(0);
    const images = importAll(require.context('../../../assets/nfts/', false, /.[1-4]\d\.png$/));

    return (
        <s.Section ref={sectionRef} className="roadmap" id="roadmap">
            <s.Left>
                <s.LeftTitle>RoadMap</s.LeftTitle>
                <s.Line ref={lineRef}>
                    <s.BallImg bg={images[page]} ref={ballRef} />
                </s.Line>
            </s.Left>
            <s.Right ref={scrollRef}>
                {new Array(4).fill(0).map((e, i) => (
                    <Product
                        title="METAVERSE"
                        content="OFFLINE PLACE 간의 경계를 허물며"
                        index={i}
                        key={i}
                        setPage={setPage}
                    />
                ))}
            </s.Right>
        </s.Section>
    );
};

export default RoadMap;
