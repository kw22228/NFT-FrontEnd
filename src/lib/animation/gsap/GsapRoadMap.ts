import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import { IGsapProps } from '../../types/GsapTypes';

const GsapRoadMap = ({ sectionRef, scrollRef, lineRef, ballRef }: IGsapProps) => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const sectionEl = sectionRef.current as HTMLDivElement;
        const scrollEl = scrollRef.current as HTMLDivElement;

        const pinWrapWidth = scrollEl.offsetWidth;
        const scrollWidth = window.innerWidth;
        const x = -pinWrapWidth + scrollWidth;

        const lineEl = lineRef.current as HTMLDivElement;
        const ballEl = ballRef.current as HTMLDivElement;

        const lineHeight = lineEl.clientHeight;
        const ballProgress = lineHeight / pinWrapWidth;

        const tl = gsap.timeline();

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
                x: x,
                ease: 'none',
                scrollTrigger: {
                    trigger: scrollEl,
                    start: 'top top',
                    end: pinWrapWidth,
                    scrub: true,

                    onUpdate: self => {
                        const progress = 100 - Math.floor(self.progress * 100);
                        ballEl.style.bottom = progress + '%';
                    },
                },
            });

            ScrollTrigger.refresh();
        }, 100);

        return () => {
            tl.kill();
        };
    }, []);
};

export default GsapRoadMap;
