import React, { useRef } from 'react';
import * as s from './Story.style';

import StoryBoard from './StoryBoard/StoryBoard';

import { useInView } from 'framer-motion';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';

import goxoFrame from '../../../assets/images/frame.png';
import BackgroundStar from '../../../assets/images/background_star.png';

const Story = () => {
    const storyRef = useRef<HTMLElement>(null);
    const isInView = useInView(storyRef, {
        once: false,
        amount: 0.3,
    });
    useViewportNavState(isInView, 'story');

    return (
        <s.Section id="story" ref={storyRef}>
            <s.Background src={BackgroundStar} alt="Star" />
            <s.Title>GOXO, 당신의 일상과 취미를 함께하세요!</s.Title>
            <StoryBoard
                title="혜택 1."
                text="Saki EveryWhere  방방곡곡에 퍼져서 활동하는 우리 Saki 들과 소통 할 수 있는 커뮤니티를 제공합니다.<br /><br />
                SNS Follow를 하시고 홀더인증을 하신분에 한하여, KAKAO TALK, Discord등 자유롭게 소통할 수 있는 공간으로 초대합니다."
            />
            <StoryBoard
                title="혜택 2."
                text="Where is My Ball?<br />Saki를 소유하고있는 홀더들과 함께 할 수 있는 오프라인 행사를 진행합니다.<br /><br />
                다양한 이벤트와 함께 일상을 벗어나 우리 Saki들만의 특별한 하루가 진행됩니다! "
                direction="reverse"
            />
            <StoryBoard
                title="혜택 3."
                text="Show your Swing! 프로 골퍼와 함께하는 오프라인 골프!<br /><br /> 우리 Saki는 모두 명랑골퍼!
                유익하고 재밌는 시간을 함께 나누어요 "
            />
            <StoryBoard
                title="혜택 4."
                text="골프는 장비빨!<br /><br />  트렌디함을 바탕으로 새로운 골프문화를 이끌어 가는 GOXO와 함께 당신의 스타일을 뽐내세요
                오직 Saki들만 가질 수 있는 혜택!."
                direction="reverse"
            />

            {/* <s.Ball bg={goxoFrame} direct="vertical" data-scroll data-scroll-speed="3" /> */}
            {/* <s.Ball //
                bg={goxoCharacter}
                direct="horizontal"
                data-scroll
                data-scroll-speed="-3"
                data-scroll-direction="horizontal"
            /> */}
            <s.MoveImg src={goxoFrame} data-scroll data-scroll-speed="4" />
        </s.Section>
    );
};

export default Story;
