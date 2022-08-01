import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useLayoutEffect } from 'react';
import { IGsapProps } from '../../types/GsapTypes';

const GsapRoadMap2 = ({ sectionRef, scrollRef, leftRef }: IGsapProps) => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const sectionEl = sectionRef.current as HTMLDivElement;
        const leftEl = leftRef.current as HTMLDivElement;
        const scrollEl = scrollRef.current as HTMLDivElement;

        const pinWrapWidth = scrollEl.offsetWidth;
        const leftWidth = leftEl.offsetWidth;
        const scrollWidth = window.innerWidth - leftWidth;
        const x = -pinWrapWidth + scrollWidth;

        const tl = gsap.timeline();

        // setTimeout(() => {
        tl.to(sectionEl, {
            height: `${scrollEl.scrollWidth}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionEl,
                start: 'top top',
                end: pinWrapWidth,
                scrub: true,
                pin: true,
            },
        });

        tl.to(scrollEl, {
            x: x,
            ease: 'power0',
            scrollTrigger: {
                trigger: scrollEl,
                start: 'top top',
                end: pinWrapWidth,
                scrub: true,
                // pinType: 'transform',
            },
        });

        ScrollTrigger.refresh();
        // }, 1);

        return () => {
            // ScrollTrigger.getAll().forEach(instance => {
            //     instance.kill();
            // });
            // gsap.killTweensOf(window);
            tl.kill();
        };
    }, []);
};

export default GsapRoadMap2;
