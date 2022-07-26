import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import { IGsapRefRevealProps } from '../../types/GsapTypes';

const GsapRoadMap2 = ({ ref, revealRef }: IGsapRefRevealProps) => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const tl = gsap.timeline();
        const refs = revealRef.current;

        setTimeout(() => {
            tl.to(refs, {
                xPercent: -100 * (refs.length - 1),
                ease: 'none',

                scrollTrigger: {
                    start: 'top top',
                    trigger: ref.current,
                    pin: true,
                    scrub: 0.5,
                    snap: 1 / (refs.length - 1),
                    scroller: '#App',
                    end: () => {
                        return ref.current ? `+=${ref.current.offsetWidth}` : '';
                    },
                },
            });

            ScrollTrigger.refresh();
        });
    });
};

export default GsapRoadMap2;
