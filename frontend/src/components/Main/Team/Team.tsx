import React from 'react';
import * as s from './Team.style';

interface ICard {
    text: string;
}
const Card = ({ text }: ICard) => {
    return <s.Card>{text}</s.Card>;
};

const Team = () => {
    return (
        <s.Section>
            <s.Title>Team</s.Title>
            <s.Container>
                <Card text="Team1" />
                <Card text="Team2" />
                <Card text="Team3" />
                <Card text="Team4" />
            </s.Container>
        </s.Section>
    );
};

export default Team;
