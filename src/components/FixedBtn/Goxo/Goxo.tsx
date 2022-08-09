import * as s from './Goxo.style';

import Sing from '../../../assets/goxo_sing.jpg';
import Orange from '../../../assets/goxo_orange.jpg';
import Insta from '../../../assets/images/Instagram-Logo.wine.svg';
import { upVariants, childVariants } from '../../../lib/animation/framer-variants/fixedBtnVariants';
import { IContainer, IGoxo } from '../../../lib/types/Goxo';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const Container = ({ img, title, x = 0, y = 0, width, setVisible, child = false }: IContainer) => {
    const customValue = {
        x,
        y,
    };

    const handleClick = () => {
        if (setVisible) {
            setVisible(prev => !prev);
        }
    };
    return (
        <s.Container //
            variants={childVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            exit="exit"
            custom={customValue}
        >
            <s.CircleImage bg={img} width={width} onClick={handleClick} />
            <s.Title child={child}>{title}</s.Title>
        </s.Container>
    );
};

const Goxo = ({ scrollHeight, percent }: IGoxo) => {
    const [visible, setVisible] = useState(false);

    const customValue = {
        scrollHeight,
        percent,
    };
    return (
        <s.Wrapper //
            variants={upVariants}
            initial="initial"
            animate="up"
            custom={customValue}
        >
            <Container img={Sing} title="Goxo" setVisible={setVisible} />

            <AnimatePresence>
                {visible && (
                    <>
                        <Container
                            img={Orange}
                            title="Shop"
                            x={-80}
                            y={-35}
                            width={2.5}
                            child={true}
                        />
                        <Container
                            img={Insta}
                            title="Insta"
                            x={-80}
                            y={35}
                            width={2.5}
                            child={true}
                        />
                    </>
                )}
            </AnimatePresence>
        </s.Wrapper>
    );
};

export default Goxo;
