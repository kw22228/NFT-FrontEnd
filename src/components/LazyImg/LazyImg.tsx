import React from 'react';
import * as s from './LazyImg.style';

import useImageLoaded from '../../lib/hooks/useImageLoaded';
import { AnimatePresence } from 'framer-motion';
import { revealVariants } from '../../lib/animation/framer-variants/revealVariants';

interface IProps {
    elementRef: React.RefObject<HTMLElement>;
    src: string;
    alt: string;
    lazy: boolean;
}
const LazyImg = ({ elementRef, src, alt, lazy }: IProps) => {
    const isLoaded = useImageLoaded(elementRef, lazy);

    return (
        <AnimatePresence>
            {isLoaded && (
                <s.LazyImg //
                    src={src}
                    alt={alt}
                    variants={revealVariants}
                    initial="initial"
                    animate="animate"
                />
            )}
        </AnimatePresence>
    );
};

export default LazyImg;
