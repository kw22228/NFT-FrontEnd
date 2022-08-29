import * as s from './StoryBoard.style';

import { leftToRight, rightToLeft } from '../../../../lib/animation/framer-variants/revealVariants';
import replaceJsx from '../../../../lib/utils/replaceJsx';

import Pin from '../../../../assets/images/pin.svg';

interface IStoryBoard {
    img: string;
    title: string;
    text: string;
    direction?: string;
    addToRefs?: (el: HTMLDivElement) => void;
}
const StoryBoard = ({ img, title, text, direction = 'row' }: IStoryBoard) => {
    return (
        <s.Container //
            direction={direction}
            variants={direction === 'row' ? leftToRight : rightToLeft}
            // variants={bottomToTop}
            initial="initial"
            whileInView="onViewport"
            viewport={{
                // margin: '100px',
                once: true,
                amount: 0.4,
            }}
        >
            <s.ImgBox src={img} />
            <s.TextBox>
                <s.Title>{title}</s.Title>
                <s.Text>{replaceJsx('<br />', <br />, text)}</s.Text>
            </s.TextBox>
        </s.Container>
    );
};

export default StoryBoard;
