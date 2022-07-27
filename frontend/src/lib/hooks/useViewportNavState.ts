import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { navAtom } from '../recoil/atoms';
import useIsInViewport from './useIsInViewport';

const useViewportNavState = (isInView: boolean, to: string) => {
    const setNavState = useSetRecoilState(navAtom);

    useEffect(() => {
        if (isInView) {
            setNavState(to);
        }
    }, [isInView]);
};

export default useViewportNavState;
