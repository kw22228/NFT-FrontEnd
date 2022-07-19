import { atom } from 'recoil';

export const navAtom = atom<string>({
    key: 'navState',
    default: 'home',
});

export const yPositionAtom = atom<number>({
    key: 'yPosition',
    default: 0,
});
