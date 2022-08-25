import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { windowInfoAtom } from '../recoil/atoms';
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
        const debounceHandleResize = debounce(handleResize, 100);

        window.addEventListener('resize', debounceHandleResize);

        return () => window.removeEventListener('resize', debounceHandleResize);
    }, []);
};

export default useDebounceResize;
