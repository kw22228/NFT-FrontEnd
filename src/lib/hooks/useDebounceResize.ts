import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { windowWidthAtom } from '../recoil/atoms';
import debounce from '../utils/debounce';

const useDebounceResize = () => {
    const setWindowWidth = useSetRecoilState(windowWidthAtom);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        const debounceHandleResize = debounce(handleResize, 100);

        window.addEventListener('resize', debounceHandleResize);

        return () => window.removeEventListener('resize', debounceHandleResize);
    }, []);
};

export default useDebounceResize;
