import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { scrollHeightAtom } from '../recoil/atoms';
import debounce from '../utils/debounce';

const useDebounceResize = () => {
    const [scrollHeight, setScrollHeight] = useRecoilState(scrollHeightAtom);

    useEffect(() => {
        const handleResize = () => {
            setScrollHeight(prev => ({
                ...prev,
                windowWidth: window.innerWidth,
            }));
        };
        const debounceHandleResize = debounce(handleResize, 500);

        window.addEventListener('resize', debounceHandleResize);

        return () => window.removeEventListener('resize', debounceHandleResize);
    }, []);
};

export default useDebounceResize;
