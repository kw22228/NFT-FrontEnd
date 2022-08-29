import { Variants } from 'framer-motion';

export const bottomToTop: Variants = {
    initial: {
        y: 200,
        opacity: 0,
    },
    onViewport: {
        y: 0,
        opacity: 1,

        transition: {
            duration: 1,
            type: 'tween',
            // bounce: 0.2,
        },
    },
};

export const leftToRight: Variants = {
    initial: {
        x: -200,
        opacity: 0,
    },
    onViewport: {
        x: 0,
        opacity: 1,

        transition: {
            duration: 0.8,
            type: 'tween',
        },
    },
};

export const rightToLeft: Variants = {
    initial: {
        x: 200,
        opacity: 0,
    },
    onViewport: {
        x: 0,
        opacity: 1,

        transition: {
            duration: 0.8,
            type: 'tween',
        },
    },
};

export const staggerVariants: Variants = {
    initial: {
        opacity: 0,
    },
    onViewport: {
        opacity: 1,

        transition: {
            delayChildren: 0,
            staggerChildren: 0.2,
        },
    },
};

export const childrenVariants: Variants = {
    initial: {
        // y: -200,
        opacity: 0,
    },
    onViewport: {
        // y: 0,
        opacity: 1,

        transition: {
            duration: 1.5,
            type: 'spring',
            bounce: 0.2,
        },
    },
};
