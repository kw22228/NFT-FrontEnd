import React from 'react';
import * as s from './Story.style';

interface IStoryBoard {
    img: string;
    text: string;
    direction?: string;
}

const StoryBoard = ({ img, text, direction = 'row' }: IStoryBoard) => {
    return (
        <s.Container direction={direction}>
            <s.ImgBox>{img}</s.ImgBox>
            <s.TextBox>{text}</s.TextBox>
        </s.Container>
    );
};

const Story = () => {
    return (
        <s.Section>
            <s.Title>STORY</s.Title>
            <StoryBoard img="Image1" text="Text1" />
            <StoryBoard img="Image2" text="Text3" direction="reverse" />
            <StoryBoard img="Image3" text="Text3" />

            <s.Ball />
        </s.Section>
    );
};

export default Story;
