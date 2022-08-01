import React, { useRef } from 'react';
import * as s from './Story.style';

import StoryBoard from './StoryBoard/StoryBoard';

import golfBall from '../../../assets/images/ball.svg';
import { useInView } from 'framer-motion';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';

const Story = () => {
    const storyRef = useRef<HTMLElement>(null);
    const isInView = useInView(storyRef, {
        once: false,
        amount: 0.4,
    });
    useViewportNavState(isInView, 'story');

    return (
        <s.Section id="story" ref={storyRef}>
            <s.Title>STORY</s.Title>
            <StoryBoard
                img="Image1"
                text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 
새로운 역사를 써갈 HAPPIER TOWN에서 
새로운 경험과 특별한 혜택을 누려보세요!"
                // addToRefs={addToRefs}
            />
            <StoryBoard
                img="Image2"
                text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 
새로운 역사를 써갈 HAPPIER TOWN에서 
새로운 경험과 특별한 혜택을 누려보세요!"
                direction="reverse"
                // addToRefs={addToRefs}
            />
            <StoryBoard
                img="Image3"
                text="METAVERSE - OFFLINE PLACE 간의 경계를 허물며 
새로운 역사를 써갈 HAPPIER TOWN에서 
새로운 경험과 특별한 혜택을 누려보세요!"
                // addToRefs={addToRefs}
            />

            <s.Ball bg={golfBall} />
        </s.Section>
    );
};

export default Story;
