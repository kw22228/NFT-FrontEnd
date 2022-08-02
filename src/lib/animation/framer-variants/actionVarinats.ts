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
