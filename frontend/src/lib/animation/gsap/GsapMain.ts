import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import { IGsapProps } from '../../types/GsapTypes';

const GsapMain = ({ imgRef, textBoxRef }: IGsapProps) => {
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        const imgEl = imgRef.current;
        const tl = gsap.timeline();
        tl.fromTo(
            imgRef.current,
            {
                x: -300,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: imgEl,
                    start: 'top-=200 center',
                    end: 'bottom-=200 center',
                    scrub: true,
                },
            }
        );
        tl.fromTo(
            textBoxRef.current,
            {
                x: -300,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: textBoxRef.current,
                    start: 'top-=200 center',
                    end: 'bottom-=200 center',
                    scrub: true,
                },
            }
        );
        return () => {
            tl.kill();
        };
    }, []);
};

export default GsapMain;
