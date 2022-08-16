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
        const debounceHandleResize = debounce(handleResize, 500);

        window.addEventListener('resize', debounceHandleResize);

        return () => window.removeEventListener('resize', debounceHandleResize);
    }, []);
};

export default useDebounceResize;
