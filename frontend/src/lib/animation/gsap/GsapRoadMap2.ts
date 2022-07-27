import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import { IGsapProps, IGsapRefRevealProps } from '../../types/GsapTypes';

const GsapRoadMap2 = ({ sectionRef, scrollRef }: IGsapProps) => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const sectionEl = sectionRef.current as HTMLDivElement;
        const scrollEl = scrollRef.current as HTMLDivElement;

        const pinWrapWidth = scrollEl.offsetWidth;
        const scrollWidth = window.innerWidth;

        const tl = gsap.timeline();

        tl.to(sectionEl, {
            scrollTrigger: {
                trigger: sectionEl,
                start: 'top top',
                end: pinWrapWidth,
                scrub: true,
                pin: true,
                markers: true,
            },
            height: `${scrollEl.scrollWidth}px`,
            ease: 'none',
        });

        tl.to(scrollEl, {
            scrollTrigger: {
                trigger: scrollEl,
                start: 'top top',
                end: pinWrapWidth,
                scrub: true,
            },
            x: -pinWrapWidth + scrollWidth,
            ease: 'none',
        });

        ScrollTrigger.refresh();

        return () => {
            tl.kill();
        };
    });
};

export default GsapRoadMap2;
