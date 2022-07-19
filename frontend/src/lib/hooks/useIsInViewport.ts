import React, { useEffect, useMemo, useState } from 'react';

const useIsInViewport = (element: any) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(
                ([entry]) => {
                    setIntersecting(entry.isIntersecting);
                },
                {
                    rootMargin: '-330px',
                }
            ),

        []
    );

    useEffect(() => {
        observer.observe(element.current);

        return () => observer.disconnect();
    }, [element, observer]);

    return isIntersecting;
};

export default useIsInViewport;
