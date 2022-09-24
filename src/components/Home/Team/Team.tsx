import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import {
    childrenVariants,
    staggerVariants,
} from '../../../lib/animation/framer-variants/revealVariants';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';
import * as s from './Team.style';

import img1 from '../../../assets/nfts/10.png';
import img2 from '../../../assets/nfts/11.png';
import img3 from '../../../assets/nfts/12.png';
import img4 from '../../../assets/nfts/13.png';

import teamBg from '../../../assets/videos/teamBg.mp4';

interface ICard {
    img: string;
    name: string;
    job: string;
}
const Card = ({ img, name, job }: ICard) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <s.Card variants={childrenVariants} ref={ref}>
            <s.CardWrap>
                <s.CardImg src={img} />
                <s.CardContents>
                    <s.Name>{name}</s.Name>
                    <s.Job>{job}</s.Job>
                </s.CardContents>
            </s.CardWrap>
        </s.Card>
    );
};

const Team = () => {
    const teamRef = useRef<HTMLElement>(null);
    const isInView = useInView(teamRef, {
        once: false,
        amount: 0.8,
    });
    useViewportNavState(isInView, 'team');

    return (
        <s.Section id="team" ref={teamRef}>
            <s.Background src={teamBg} autoPlay muted loop />
            <s.Title>Team</s.Title>
            <s.Container //
                variants={staggerVariants}
                initial="initial"
                whileInView="onViewport"
                viewport={{
                    once: true,
                    amount: 'all',
                }}
            >
                <Card name="Team1" job="Job1" img={img1} />
                <Card name="Team2" job="Job2" img={img2} />
                <Card name="Team3" job="Job3" img={img3} />
                <Card name="Team4" job="Job4" img={img4} />
            </s.Container>
        </s.Section>
    );
};

export default Team;
