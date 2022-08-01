import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IGsapRefRevealProps } from '../../types/GsapTypes';

const GsapRoadMap = ({ ref, revealRef }: IGsapRefRevealProps) => {
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        const sections = revealRef.current;
        const element = ref.current;

        const width = element?.offsetWidth;

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                start: 'top top',
                trigger: element,
                pin: true,
                scrub: 0.5,
                snap: 1 / (sections.length - 1),
                end: () => `+=${width}`,
            },
        });
    }, []);
};

export default GsapRoadMap;
