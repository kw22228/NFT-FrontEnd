import * as s from './StoryBoard.style';

import { leftToRight, rightToLeft } from '../../../../lib/animation/framer-variants/revealVariants';
import replaceJsx from '../../../../lib/utils/replaceJsx';

// import Pin from '../../../../assets/images/pin.svg';
import yellowDot from '../../../../assets/videos/yellowDot.mp4';

interface IStoryBoard {
    title: string;
    text: string;
    direction?: string;
    addToRefs?: (el: HTMLDivElement) => void;
}
const StoryBoard = ({ title, text, direction = 'row' }: IStoryBoard) => {
    return (
        <s.Container //
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
            <s.Background src={yellowDot} autoPlay muted loop />
            <s.TextBox>
                <s.Title>{title}</s.Title>
                <s.Text>{replaceJsx('<br />', <br />, text)}</s.Text>
            </s.TextBox>
        </s.Container>
    );
};

export default StoryBoard;
