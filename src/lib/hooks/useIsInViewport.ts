import React, { useEffect, useMemo, useState } from 'react';

const useIsInViewport = (elementRef: React.RefObject<HTMLElement>) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(
                ([entry]) => {
                    setIntersecting(entry.isIntersecting);
                },
                {
                    rootMargin: '50px',
                    threshold: 0.3,
                }
            ),
        []
    );

    useEffect(() => {
        elementRef.current && observer.observe(elementRef.current);

        return () => observer.disconnect();
    }, [elementRef, observer]);

    return isIntersecting;
};

export default useIsInViewport;
