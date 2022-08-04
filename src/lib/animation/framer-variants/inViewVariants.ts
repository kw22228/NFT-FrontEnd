import { Variants } from 'framer-motion';

export const RoadMapVariants: Variants = {
    initial: {
        filter: `grayscale(100%)`,
        // scale: 0.7,
    },
    onViewport: {
        filter: `grayscale(0%)`,
        // scale: 1,

        transition: {
            duration: 0.5,
        },
    },
};
