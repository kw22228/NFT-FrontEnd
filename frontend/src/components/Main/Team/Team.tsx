import React, { useRef } from 'react';
import { childrenVariants, staggerVariants } from '../../../lib/animation/variants/revealVariant';
import useViewportState from '../../../lib/hooks/useViewportState';
import * as s from './Team.style';

interface ICard {
    text: string;
}
const Card = ({ text }: ICard) => {
    return <s.Card variants={childrenVariants}>{text}</s.Card>;
};

const Team = () => {
    const teamRef = useRef<HTMLElement>(null);
    useViewportState(teamRef, 'team');

    return (
        <s.Section id="team" ref={teamRef}>
            <s.Title>Team</s.Title>
            <s.Container //
                variants={staggerVariants}
                initial="initial"
                whileInView="onViewport"
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
            >
                <Card text="Team1" />
                <Card text="Team2" />
                <Card text="Team3" />
            </s.Container>
        </s.Section>
    );
};

export default Team;
