import { selector } from 'recoil';
import { isDarkAtom } from '../atoms';

export const isDarkSelector = selector({
    key: 'isDarkSelector',
    get: ({ get }) => {
        const isDark = get(isDarkAtom);

        return isDark;
    },
    set: ({ set }, isDark) => {
        const value = isDark ? 'dark' : 'light';
        window.localStorage.setItem('mode', value);

        set(isDarkAtom, isDark);
    },
});
