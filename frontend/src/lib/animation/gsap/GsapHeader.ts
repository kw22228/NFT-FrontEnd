import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import { IGsapProps } from '../../types/GsapTypes';

const GsapHeader = ({ ref }: IGsapProps) => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const element = ref.current;

        const tl = gsap.timeline();
        tl.to(element, {
            position: 'fixed',
            top: '1rem',
            left: '50%',
            width: '80%',
            transform: 'translateX(-50%)',

            padding: '',
            borderRadius: '50px',
            border: '3px solid white',

            scrollTrigger: {
                trigger: element,
                start: 'bottom+=200 top',
                end: '+=200',
                scrub: true,
            },
        });

        return () => {
            tl.kill();
        };
    }, []);
};

export default GsapHeader;
