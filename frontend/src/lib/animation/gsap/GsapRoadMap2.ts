import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useLayoutEffect } from 'react';
import { IGsapProps } from '../../types/GsapTypes';

const GsapRoadMap2 = ({ sectionRef, scrollRef }: IGsapProps) => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let sectionEl = sectionRef.current as HTMLDivElement;
        let scrollEl = scrollRef.current as HTMLDivElement;

        let pinWrapWidth = scrollEl.offsetWidth;
        let scrollWidth = window.innerWidth;

        console.log(pinWrapWidth, scrollWidth);

        let tl = gsap.timeline();

        setTimeout(() => {
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
                x: -pinWrapWidth + scrollWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: scrollEl,
                    start: 'top top',
                    end: pinWrapWidth,
                    scrub: true,
                },
            });

            ScrollTrigger.refresh();
        }, 1000);

        return () => {
            ScrollTrigger.getAll().forEach(instance => {
                instance.kill();
            });
            // gsap.killTweensOf(window);
            // tl.kill();
        };
    }, []);
};

export default GsapRoadMap2;
