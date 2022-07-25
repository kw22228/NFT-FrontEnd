import { atom } from 'recoil';
import { IScrollHeight } from './types';

export const navAtom = atom<string | null>({
    key: 'navState',
    default: null,
});

export const scrollHeightAtom = atom<IScrollHeight>({
    key: 'yPosition',
    default: {
        scrollHeight: 0,
        currentY: 0,
    },
});
