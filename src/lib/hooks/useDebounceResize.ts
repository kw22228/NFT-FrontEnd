import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { globalWidthAtom } from '../recoil/atoms';
import debounce from '../utils/debounce';

const useDebounceResize = () => {
    const [globalWidth, setGlobalWidth] = useRecoilState(globalWidthAtom);

    useEffect(() => {
        const handleResize = () => {
            setGlobalWidth({
                width: window.innerWidth,
            });
        };
        const debounceHandleResize = debounce(handleResize, 50);

        window.addEventListener('resize', debounceHandleResize);

        return () => window.addEventListener('resize', debounceHandleResize);
    }, []);
};

export default useDebounceResize;
