import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { navAtom } from '../recoil/atoms';
import useIsInViewport from './useIsInViewport';

const useViewportState = (ref: any, to: string) => {
    const refInViewPort = useIsInViewport(ref);

    const setNavState = useSetRecoilState(navAtom);

    useEffect(() => {
        if (refInViewPort) {
            setNavState(to);
        }
    }, [refInViewPort]);
};

export default useViewportState;
