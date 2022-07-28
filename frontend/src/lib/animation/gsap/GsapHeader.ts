import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IGsapProps } from '../../types/GsapTypes';

const GsapHeader = ({ ref, navRef }: IGsapProps) => {
    const { pathname } = useLocation();

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const element = ref.current;
        const navElement = navRef.current;

        let tl = gsap.timeline();

        // setTimeout(() => {
        tl.to(element, {
            position: 'fixed',
            top: '1rem',
            left: '50%',
            width: '80%',
            transform: 'translateX(-50%)',

            padding: '',
            borderRadius: '50px',
            border: '3px solid white',
            backgroundColor: 'rgba(255,255,255,0.6)',

            scrollTrigger: {
                trigger: element,
                start: 'bottom top',
                end: '+=200',
                scrub: true,
                markers: true,
            },
        });

        tl.to(navElement, {
            width: '90%',
            scrollTrigger: {
                trigger: navElement,
                start: 'bottom top',
                end: '+=200',
                scrub: true,
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
    }, [pathname]);
};

export default GsapHeader;
