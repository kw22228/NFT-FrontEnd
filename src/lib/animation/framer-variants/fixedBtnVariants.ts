import { Variants } from 'framer-motion';
import { IGoxo } from '../../types/Goxo';

export const scrollUpVariants: Variants = {
    initial: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    hover: {
        opacity: 0.7,
    },

    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const upVariants: Variants = {
    initial: {
        y: 0,
    },
    hover: {
        opacity: 0.7,
    },
    up: ({ scrollHeight, percent }: IGoxo) => ({
        y: Math.ceil(scrollHeight.progressY * 100) > percent ? -80 : 0,
        transition: {
            duration: 0.5,
        },
    }),
};

export const childVariants: Variants = {
    initial: {
        x: 0,
        y: 0,
        opacity: 1,
    },
    animate: ({ x, y }: { x: number; y: number }) => ({
        x,
        y,
        transition: {
            type: 'tween',
        },
    }),
    hover: {
        opacity: 0.7,
    },
    exit: {
        opacity: 0,
        x: 0,
        y: 0,
        transition: {
            type: 'tween',
        },
    },
};
