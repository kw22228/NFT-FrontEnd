import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import { IGsapRevealProps } from '../../types/GsapTypes';

const GsapStory = ({ revealRef }: IGsapRevealProps) => {
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        const tl = gsap.timeline();
        revealRef.current.forEach((el, index) => {
            const dir = el.attributes[0].value;
            tl.fromTo(
                el,
                {
                    x: dir === 'row' ? -300 : 300,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top-=200 center',
                        end: 'bottom-=200 center',
                        scrub: true,
                    },
                }
            );
        });
        return () => {
            tl.kill();
        };
    }, []);
};

export default GsapStory;
