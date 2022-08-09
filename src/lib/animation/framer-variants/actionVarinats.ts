import { Variants } from 'framer-motion';

export const pulseVariants: Variants = {
    normal: {
        scale: 1,
    },
    hover: {
        scale: [1, 1.2, 1],
        transition: {
            repeat: Infinity,
        },
    },
};

export const jumpVariants: Variants = {
    normal: {
        opacity: 0,
    },
    action: {
        opacity: [0, 1, 0],
        y: [0, -20, 0],
        transition: {
            repeat: Infinity,
        },
    },
};
