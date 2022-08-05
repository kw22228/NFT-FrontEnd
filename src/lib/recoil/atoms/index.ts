import { atom } from 'recoil';
import { IScrollHeight, IWallet } from './types';

export const navAtom = atom<string | null>({
    key: 'navState',
    default: null,
});

export const scrollHeightAtom = atom<IScrollHeight>({
    key: 'scrollPosition',
    default: {
        scrollHeight: 0,
        currentY: 0,
        progressY: 0,
    },
});

export const walletAtom = atom<IWallet | null>({
    key: 'wallet',
    default: {
        account: '',
        balance: '',
    },
});
