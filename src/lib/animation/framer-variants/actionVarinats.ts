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

export const introVariants: Variants = {
    initial: {
        y: 0,
        opacity: 1,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: '100%',
        opacity: 0,

        transition: {
            duration: 2,
        },
    },
};
export const carVariants: Variants = {
    initial: {
        x: -300,
    },
    animate: {
        x: window.innerWidth / 2,

        transition: {
            duration: 3,
            delay: 3,
        },
    },
};
