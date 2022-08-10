import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../../recoil/atoms';
import { IGsapProps } from '../../types/GsapTypes';

const GsapHeader = ({ ref, navRef }: IGsapProps) => {
    const isDark = useRecoilValue(isDarkAtom);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const element = ref.current as HTMLDivElement;

        const tl = gsap.timeline();
        const timeout = setTimeout(() => {
            tl.to(element, {
                // top: '1rem',
                // left: '10%',
                // width: '80%',

                // padding: '',
                // borderRadius: '50px',
                borderBottom: isDark ? '2px solid black' : '2px solid white',
                backgroundColor: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255, 255, 255, 0.6)',
                duration: 1,
                ease: 'power1.out',

                scrollTrigger: {
                    trigger: element,
                    start: 'bottom+=200 top',
                    end: '+=300',
                    scrub: true,
                },
            });
        }, 100);

        return () => {
            clearTimeout(timeout);
            tl.kill();
            ScrollTrigger.refresh();
        };
    }, []);
};

export default GsapHeader;
