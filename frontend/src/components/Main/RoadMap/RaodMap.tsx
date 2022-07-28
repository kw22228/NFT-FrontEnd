import React, { useEffect, useRef, useState } from 'react';
import * as s from './RoadMap.style';

import bg from '../../../assets/images/main.jpg';
import { RoadMapVariants } from '../../../lib/animation/variants/inViewVariant';
import GsapRoadMap from '../../../lib/animation/gsap/GsapRoadMap';
import { useInView } from 'framer-motion';

interface IRoadMapItem {
    title: string;
    content: string;
    index: number;
    addToRefs: (el: HTMLDivElement) => void;
}

const RoadMapItem = ({ title, content, index, addToRefs }: IRoadMapItem) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: false,
        amount: 'all',
    });
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (isInView) {
            setPage(index);
        }
    }, [isInView, page]);

    return (
        <s.ItemWrapper ref={addToRefs}>
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
                ref={ref}
            >
                <s.Title>{title}</s.Title>
                <s.Content>{content}</s.Content>
            </s.Item>
            <div></div>
        </s.ItemWrapper>
    );
};
<<<<<<< HEAD
=======
const RaodMap = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);
    GsapRoadMap({ lineRef, ballRef });
>>>>>>> root_origin/master

const RaodMap = () => {
    const ref = useRef<HTMLDivElement>(null);
    const revealRef = useRef<HTMLDivElement[]>([]);
    const addToRefs = (el: HTMLDivElement) => {
        if (el && !revealRef.current.includes(el)) {
            revealRef?.current.push(el);
        }
    };
    GsapRoadMap({ ref, revealRef });

    const arr = new Array(4).fill(0);
    return (
        <s.Section ref={ref} className="roadmap" id="roadmap">
            <s.Left>
                <s.LeftTitle>RoadMap</s.LeftTitle>
            </s.Left>
            <s.Right len={arr.length}>
                {arr.map((e, i) => (
                    <RoadMapItem
                        title="METAVERSE"
                        content="OFFLINE PLACE 간의 경계를 허물며"
                        index={i}
                        key={i}
                        addToRefs={addToRefs}
                    />
                ))}
            </s.Right>
        </s.Section>
    );
};

export default RaodMap;
