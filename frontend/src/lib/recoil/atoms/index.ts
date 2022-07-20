import { atom } from 'recoil';

export const navAtom = atom<string | null>({
    key: 'navState',
    default: null,
});

export const yPositionAtom = atom<number>({
    key: 'yPosition',
    default: 0,
});
