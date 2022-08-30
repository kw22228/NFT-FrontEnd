import { Variants } from 'framer-motion';

export const revealVariants: Variants = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            type: 'tween',
        },
    },
};

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

export const logoStagger: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,

        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
        },
    },
};
export const logoChildren: Variants = {
    initial: {
        y: -200,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,

        transition: {
            duration: 1.5,
            type: 'spring',
        },
    },
};

export const titleLogo: Variants = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
        transition: {
            delay: 3,
            duration: 0.5,
            type: 'spring',
        },
    },
};
