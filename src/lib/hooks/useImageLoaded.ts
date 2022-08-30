import React, { useEffect, useState } from 'react';
import useIsInViewport from './useIsInViewport';

const useImageLoaded = (elementRef: React.RefObject<HTMLElement>, lazy: boolean) => {
    const [isLoaded, setIsLoaded] = useState(!lazy);
    const isIntersecting = useIsInViewport(elementRef);

    useEffect(() => {
        if (isLoaded || !isIntersecting) return;

        setIsLoaded(true);
    }, [isIntersecting]);

    return isLoaded;
};

export default useImageLoaded;
