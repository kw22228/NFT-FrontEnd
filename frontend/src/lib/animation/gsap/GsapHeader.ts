import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import { IGsapProps } from '../../types/GsapTypes';

const GsapHeader = ({ ref, navRef }: IGsapProps) => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let element = ref.current;
        let navElement = navRef.current;

        let tl = gsap.timeline();

        setTimeout(() => {
            tl.to(element, {
                position: 'fixed',
                top: '1rem',
                left: '50%',
                width: '80%',
                transform: 'translateX(-50%)',

                padding: '',
                borderRadius: '50px',
                border: '3px solid white',
                backgroundColor: 'rgba(255,255,255,0.7)',

                scrollTrigger: {
                    trigger: element,
                    start: 'bottom+=200 top',
                    end: '+=200',
                    scrub: true,
                    scroller: '#App',
                    markers: true,
                },
            });

            // tl.to(navElement, {
            //     width: '90%',
            //     scrollTrigger: {
            //         trigger: element,
            //         start: 'bottom+=200 top',
            //         end: '+=200',
            //         scrub: true,
            //     },
            // });
            // ScrollTrigger.refresh();
        });

        return () => {
            tl.kill();
        };
    }, []);
};

export default GsapHeader;
