import React from 'react';
import { leftToRight, rightToLeft } from '../../../../lib/animation/framer-variants/revealVariants';
import * as s from './StoryBoard.style';

interface IStoryBoard {
    img: string;
    text: string;
    direction?: string;
    addToRefs?: (el: HTMLDivElement) => void;
}
const StoryBoard = ({ img, text, direction = 'row' }: IStoryBoard) => {
    return (
        <s.Container //
            direction={direction}
            variants={direction === 'row' ? leftToRight : rightToLeft}
            // variants={bottomToTop}
            initial="initial"
            whileInView="onViewport"
            viewport={{
                once: true,
                amount: 'some',
            }}
        >
            <s.ImgBox bg={img} />
            <s.TextBox>{text}</s.TextBox>
        </s.Container>
    );
};

export default StoryBoard;
