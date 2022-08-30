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
        x: 0,
        opacity: 1,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: '100%',
        opacity: 0,

        transition: {
            duration: 1.5,
        },
    },
};
export const carVariants: Variants = {
    initial: {
        x: -300,
    },
    animate: {
        x: window.innerWidth / 3,

        transition: {
            duration: 3,
            // delay: 3,
        },
    },
};

export const scaleReveal: Variants = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
        transition: {
            delay: 0.5,
            duration: 1.5,
            type: 'spring',
            bounce: 0.6,
        },
    },
};
