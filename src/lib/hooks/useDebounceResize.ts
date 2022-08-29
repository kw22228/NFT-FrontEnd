import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { windowInfoAtom } from '../recoil/atoms';
import { THROTTLE_DEBOUNCE_TIMEOUT } from '../utils/constant';
import debounce from '../utils/debounce';

const useDebounceResize = () => {
    const setWindowInfo = useSetRecoilState(windowInfoAtom);

    useEffect(() => {
        const handleResize = () => {
            setWindowInfo({
                width: window.innerWidth,
                zoomLevel: window.devicePixelRatio,
            });
        };
        const debounceHandleResize = debounce(handleResize, THROTTLE_DEBOUNCE_TIMEOUT);

        window.addEventListener('resize', debounceHandleResize);

        return () => window.removeEventListener('resize', debounceHandleResize);
    }, []);
};

export default useDebounceResize;
